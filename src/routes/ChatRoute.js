import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ChatRoute = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default ChatRoute;