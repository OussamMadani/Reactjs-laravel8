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
            <div className="card text-center">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                   {children}
                </div>
            </div>
        </div>
        
    );
}


export default AppContainer;