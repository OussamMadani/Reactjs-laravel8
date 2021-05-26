import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './Layout/Navbar';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {
    return (
        <Router >
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/add" component={Add}/>
                <Route  path="/edit/:id" component={Edit}/>                  
            </Switch>
        </Router>
    );
}


ReactDOM.render(<App/>, document.getElementById('app'));