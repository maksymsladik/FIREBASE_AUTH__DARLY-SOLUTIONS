import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import LogUp from "../pages/LogUp";
import LogIn from "../pages/LogIn";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs";
import * as paths from "./paths";

function Router({ auth }) {
  return !Object.values(auth).length ? (
    <Switch>
      <Route path={paths.BaseUrl} exact component={Home} />
      <Route path={paths.LogUpUrl} exact component={LogUp} />
      <Route path={paths.LogInUrl} exact component={LogIn} />
      <Redirect to={paths.LogUpUrl} />
    </Switch>
  ) : (
    <Switch>
      <Route path={paths.BaseUrl} exact component={Home} />
      <Route path={paths.DashboardUrl} exact component={Dashboard} />
      <Route path={paths.ContactsUrl} exact component={Contacts} />
      <Route path={paths.AboutUsUrl} exact component={AboutUs} />
      <Redirect to={paths.DashboardUrl} />
    </Switch>
  );
}

export default Router;
