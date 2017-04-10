import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as stores from 'common/stores';
import * as Views from 'components/views';
import * as Action from 'common/actions';
import { Roles } from 'common/constants';

useStrict(true);

const Application = () => (
  <Provider { ...stores }>
    <Router history={browserHistory}>
      <Route path="/" component={Views.Layout}>
        <IndexRedirect to="dashboard" />
        
        <Route path="dashboard" component={Views.Dashboard} onEnter={Action.allowedFor(Roles.ALL)}>
          <IndexRedirect to="overview" />
          
          <Route path="overview" component={Views.Overview} />
          <Route path="new" component={Views.AddRepository} />
        </Route>

        <Route path="login" component={Views.Login} onEnter={Action.allowedFor()} />
        <Route path="settings" component={Views.Settings} onEnter={Action.allowedFor(Roles.ALL)} />

        <Route path="400" component={Views.Forbidden} />
        <Route path="*" component={Views.NotFound} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
