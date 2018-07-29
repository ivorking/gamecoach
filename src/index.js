import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

render(<Router />, document.querySelector('#main'));
