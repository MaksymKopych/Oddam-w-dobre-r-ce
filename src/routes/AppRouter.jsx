import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./Home";
export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={<Home />} exact={true} />
      <Redirect to="/home" />
    </Switch>
  );
};
