require('../css/main.css');

import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';

window.React = require('react');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/about" component={About}/>
      <Route path="/" component={Home}>
        <Route path="popular" component={Home}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
