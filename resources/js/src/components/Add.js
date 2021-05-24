import React from 'react';
import AppContainer from './AppContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Add = () => {
    return (
        <AppContainer
        title="ADD POST"
        >
        <form>
            <div class="form-group">
             <label>Title</label>
             <input className="form-control" type="text"/>
             <label>Description</label>
             <textarea className="form-control" type="text"/>
            </div>
            <button className="btn btn-success" type="button">Add</button>
        </form>
        </AppContainer>
    );
}


export default Add;