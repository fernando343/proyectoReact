import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Layout from '../layouts/Layout';
import Home from '../containers/Home';
import Works from '../containers/Works';
import Chat from '../containers/Chat';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/workslist" component={Works} />
                <Route exact path="/chat" component={Chat} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;