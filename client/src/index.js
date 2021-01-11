import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Sign Up/Signup';

const ren = (
  <Router>
    <Route path='/' exact component={App} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={SignUp} />
  </Router>
);

ReactDOM.render(ren, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
