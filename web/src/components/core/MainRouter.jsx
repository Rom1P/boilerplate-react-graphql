import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RootPage from './RootPage';

const MainRouter = () => (
    <Router>
        <Switch>
            <Route path="/">
                <RootPage />
            </Route>
        </Switch>
    </Router>
);

export default MainRouter;
