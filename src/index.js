import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import NavBar from './components/NavBar';

ReactDOM.render(<NavBar />, document.getElementById('navbar-header'));
ReactDOM.render(<App />, document.getElementById('root'));
