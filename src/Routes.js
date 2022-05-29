import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/users" component={Page2} />
        <Route path="/contact" component={Page3} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
