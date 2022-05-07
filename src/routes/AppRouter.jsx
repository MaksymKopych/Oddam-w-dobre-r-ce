import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { HandOver } from "./HandOver";
import { Registration } from "./Registration";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="contener">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} exact={true} />
          <Route path="/logout" component={Logout} exact={true} />
          <Route path="/oddaj-rzeczy" component={HandOver} exact={true} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>


  );
};
