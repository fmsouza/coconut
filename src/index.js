import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as stores from 'common/stores';
import Router from './router';

useStrict(true);

const Application = () => (
  <Provider { ...stores }>
    <Router />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
