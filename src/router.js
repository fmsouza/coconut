import React from 'react';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import * as Views from 'components/views';
import * as Action from 'common/actions';
import { Roles } from 'common/constants';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={Views.Layout}>
            <IndexRedirect to="dashboard" />
            
            <Route path="dashboard" component={Views.Dashboard} onEnter={Action.allowedFor(Roles.ALL)} />
            <Route path="login" component={Views.Login} onEnter={Action.allowedFor()} />

            <Route path="400" component={Views.Forbidden} />
            <Route path="*" component={Views.NotFound} />
        </Route>
    </Router>
);
