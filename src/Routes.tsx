import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, RouteProps, Redirect } from "react-router-dom";
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
import FavouriteCoinList from "./pages/FavouriteList";



const ProtectedRoute: FC<RouteProps & { isAuth: boolean, component: FC }> = ({ component: Component, isAuth, ...props }) => {
  return isAuth ? <Component {...props} /> : <Redirect to="/Signin" />
}

const Routes = ({ isAuthenticated }: any) => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Signin" >
            <Signin />
          </Route>


          <Route exact path="/Signup">
            <Signup />
          </Route>


          <Route exact path="/ForgotPassword">
            <ForgotPassword />
          </Route>

          {/* <ProtectedRoute exact path="/ForgotPassword" component={ForgotPassword} isAuth={isAuthenticated} /> */}

          {/* <Route exact path="/list">
            <List />
          </Route> */}

          <ProtectedRoute exact path="/list" component={List} isAuth={isAuthenticated} />

          {/* 
          <Route exact path="/market">
            <MarketView />
          </Route> */}
          <ProtectedRoute exact path="/market" component={MarketView} isAuth={isAuthenticated} />


          {/* <Route exact path="/Notifications">
            <Notifications />
          </Route> */}

          <ProtectedRoute exact path="/Notifications" component={Notifications} isAuth={isAuthenticated} />


          {/* <Route exact path="/UserProfile">
            <UserProfile />
          </Route> */}
          <ProtectedRoute exact path="/UserProfile" component={UserProfile} isAuth={isAuthenticated} />


          <ProtectedRoute exact path="/Settings" component={Settings} isAuth={isAuthenticated} />

          {/* <Route exact path="/favourite">
            <FavouriteCoinList />
          </Route> */}

          <ProtectedRoute exact path="/favourite" component={FavouriteCoinList} isAuth={isAuthenticated} />

          {/* <Route exact path="/AllNotify">
            <AllNotify />
          </Route> */}


          <ProtectedRoute exact path="/AllNotify" component={AllNotify} isAuth={isAuthenticated} />

          {/* <Route exact path="/AddPin">
            <AddPin />
          </Route> */}
          <ProtectedRoute exact path="/AddPin" component={AddPin} isAuth={isAuthenticated} />

          {/* <Route exact path="/EnteroldPassword">
            <EnteroldPassword />
          </Route> */}
          <ProtectedRoute exact path="/EnteroldPassword" component={EnteroldPassword} isAuth={isAuthenticated} />

          {/* <Route exact path="/AddnewPin">
            <AddnewPin />
          </Route> */}

          <ProtectedRoute exact path="/AddnewPin" component={AddnewPin} isAuth={isAuthenticated} />





          <Route
            component={(props: any) => <CryptoStats {...props} />}
            exact
            path="/details/:id"
          />

        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
