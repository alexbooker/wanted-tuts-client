require('../css/main.css');

import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';

window.React = require('react');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'));
