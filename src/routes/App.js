import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Home from '../containers/Home';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import Dashboard from '../containers/Dashboard';
import Works from '../containers/Works';
import Chat from '../layouts/Chat';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/workslist" component={Works} />
            <Route exact path="/chat" component={Chat} />
        </Switch>
    </BrowserRouter>
);

export default App;