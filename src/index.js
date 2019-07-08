/* -- framework -- */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

/* -- styles -- */
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
