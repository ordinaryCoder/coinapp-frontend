import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/DashboardList";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";

const Routes = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/Signin">
            <Signin />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
