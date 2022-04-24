import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomeNavbar } from "../components/HomeNavbar";
import { Home } from "./Home";
import { Login } from "./Login";
import { Registration } from "./Registration";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="login">
          <NavLink to="/login">Zaloguj</NavLink>
          <NavLink to="/registration">Załóż konto</NavLink>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Start</NavLink>
            </li>
            <li>
              <a href="#info">O co chodzi?</a>
            </li>
            <li>
              <a href="#about">O nas</a>
            </li>
            <li>
              <a href="#organizations">Fundacja i organizacje</a>
            </li>
            <li>
              <a href="#contacts">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contener">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} exact={true} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
