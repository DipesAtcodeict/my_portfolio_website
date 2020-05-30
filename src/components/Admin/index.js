import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Dasboard from './dashboard';
import CreatePost from './createPost';

const NotFound = () => <h1>Not Found</h1>;

const Admin = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.url} component={Login} />
      <Route path={`${match.url}/dashboard`} component={Dasboard} />
      <Route path={`${match.url}/createPost`} component={CreatePost} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Admin;
