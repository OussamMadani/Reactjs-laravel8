import React, { Children } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const AppContainer = ({title,children}) => {
    return (
        <div className="container">
            <div class="card text-center">
                <div class="card-header">
                    {title}
                </div>
                <div class="card-body">
                   {children}
                </div>
            </div>
        </div>
        
    );
}


export default AppContainer;