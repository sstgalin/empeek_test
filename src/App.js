import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from 'containers/Home';
import Dashboard from 'containers/Dashboard';

const App = (props) => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
