import React from 'react';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import * as Views from 'components/views';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={Views.Layout}>
            <IndexRedirect to="home" />
            
            <Route path="home" component={Views.Home} />
            <Route path="login" component={Views.Login} />

            <Route path="400" component={Views.Forbidden} />
            <Route path="*" component={Views.NotFound} />
        </Route>
    </Router>
);