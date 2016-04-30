import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BaseLayout from './base-layout';
import LoginPage from './login-page';

export default (
  <Route path="/" component={BaseLayout}>
    <IndexRoute component={LoginPage}/>
  </Route>
);
