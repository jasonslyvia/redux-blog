import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Admin from '../views/Admin';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/detail" component={Detail} />
    <Route path="/admin" component={Admin} />
  </Router>
);

export default routes;
