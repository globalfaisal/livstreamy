/* -- framework -- */
import React from 'react';
import ReactDOM from 'react-dom';

/* -- styles -- */
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/main.scss';
/* -- custom components -- */
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));
