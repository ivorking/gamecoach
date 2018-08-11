import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Router />, document.getElementById('main'));
registerServiceWorker();
