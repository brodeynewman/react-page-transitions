import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';

const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/:path" render={() => <Home />} />
  </Switch>
);

export default Router;
