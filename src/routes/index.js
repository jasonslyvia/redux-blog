import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Admin from '../views/Admin';

const routes = browserHistory => (
  <Router history={browserHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>
);

export default routes;
