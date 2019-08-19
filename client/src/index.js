/* -- framework -- */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from './store';
import history from './utils/history/history';
import App from './components/App';

/* -- styles -- */
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);
