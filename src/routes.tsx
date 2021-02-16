import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import List from "./pages/list";
import App from "./App";
import Home from "./pages/home";

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
