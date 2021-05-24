import React from 'react';
import AppContainer from './AppContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Home = () =>{
    return (
            <AppContainer
            title="list of"
            >
                <div class="card-body">
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
                                <tr>
                                    <td>1</td>
                                    <td>title example</td>
                                    <td>A short descritopn</td>
                                    <td>
                                        <a href="#" className="btn btn-danger">Delete</a>
                                        <Link to="/edit" className="btn btn-warning">Edite</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link to="/add" class="btn btn-primary">Add book</Link>
                </div>
            </AppContainer>
        );
}
export default Home;