import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Root from './Root';
import App from './App';
import Admin from './components/Admin';
import './index.css';

const NotFound = () => <h1>Not Found</h1>;

ReactDOM.render(
  <Root>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/admin' component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Root>,
  document.getElementById('root')
);
