import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/page=:paginate/" exact component={Home} />
        <Route path="/user=:username/id=:idUser/page=:paginate/" exact component={Home} />
        <Redirect to={`/page=1/`} exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
