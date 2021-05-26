import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Edit = () => {
    const {id} = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');

    const onEditSubmit = async() =>{
        setLoading(true);
        try{
            await api.updatePost({
                title,description,
            }, id);
            history.push('/');
        }catch{
            alert('Failed to edit post!');
        } finally{
            setLoading(false);
        }
    };
    useEffect (() => {
        api.getOnePost(id).then(res => {
            const result = res.data;
            const post = result.data;
            setTitle(post.title);
            setDescription(post.description); 
        })

    },[]);
    return (
        <AppContainer
        title="EDIT POST"
        >
        <form>
            <div className="form-group">
             <label>Title</label>
             <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
             <label>Description</label>
             <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <button className="btn btn-success" type="button" onClick={onEditSubmit} disabled={loading}>{loading ? 'LOADING...':'EDIT'}</button>
        </form>
        </AppContainer>
    );
}


export default Edit;