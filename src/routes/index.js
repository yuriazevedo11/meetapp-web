import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Details from '~/pages/Details';
import NewEdit from '~/pages/NewEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/details" component={Details} isPrivate />
      <Route path="/edit/:id" component={NewEdit} isPrivate />
      <Route path="/new" component={NewEdit} isPrivate />
    </Switch>
  );
}
