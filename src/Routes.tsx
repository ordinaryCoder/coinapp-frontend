import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/DashboardList";
import Home from "./pages/Home";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Notifications from "./pages/Notifications";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";

import AllNotify from "./pages/AllNotify";

import MarketView from "./pages/MarketView";
import FavList from "./pages/Favourites";
import AddPin from "./pages/AddPin";

import { CryptoStats } from "./pages/CryptoStats";
import EnteroldPassword from "./pages/EnteroldPassword";
import AddnewPin from "./pages/AddnewPin";

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
          <Route
            component={(props: any) => <CryptoStats {...props} />}
            exact
            path="/details/:id"
          />



          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/ForgotPassword">
            <ForgotPassword />
          </Route>

          <Route exact path="/Notifications">
            <Notifications />
          </Route>

          <Route exact path="/UserProfile">
            <UserProfile />
          </Route>

          <Route exact path="/Settings">
            <Settings />
          </Route>
          <Route exact path="/favs">
            <FavList />
          </Route>

          <Route exact path="/AllNotify">
            <AllNotify />
          </Route>

          <Route exact path="/AddPin">
            <AddPin />
          </Route>

          <Route exact path="/EnteroldPassword">
            <EnteroldPassword />
          </Route>
          <Route exact path="/AddnewPin">
            <AddnewPin />
          </Route>


          <Route exact path="/market">
            <MarketView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
