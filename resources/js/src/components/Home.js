import React,{useEffect, useState} from 'react';
import AppContainer from './AppContainer';
import api from '../api';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Home = () => {
    const [posts, setPosts]= useState(null);

   const fetchPosts = () => {
    api.getAllPost().then(res => {
        const result = res.data;
        setPosts(result.data);
    });
   }
    useEffect(() => {
       fetchPosts();
    }, []);
        console.log(posts);
    const renderPost = () => {
        if(!posts) {
            return(
                <tr>
                    <td colSpan="4"> Landing posts.... </td>
                </tr>
            );
        }
        if(posts.length === 0){
            return(
                <tr>
                    <td colSpan="4"> There is no post yet </td>
                </tr>
            );
        }
        return posts.map((post)=>(
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link className="btn btn-warning" to={`/edit/${post.id}`}>Edit</Link>
                    <button type="button" className="btn btn-danger" 
                    onClick={() =>{
                        api.deletePost(post.id).then(res =>{
                            fetchPosts();
                            alert('this post is deleted' +post.title);
                        }).catch(err => {
                                alert('Failed to delete post with id :'+ post.id);
                            });
                    }}>DELETE</button>
                </td>
            </tr>
        ));
    }
    return (
            <AppContainer
            title="list of"
            >
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderPost()}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/add" className="btn btn-primary">Add book</Link>
                </div>
            </AppContainer>
        );
}
export default Home;