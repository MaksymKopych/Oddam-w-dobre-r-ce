import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Context } from "../App";
import { Home } from "./Home";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Registration } from "./Registration";
import { useAuthState } from "react-firebase-hooks/auth";
export const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const logOut = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.href = "/logout";
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        {user ? (
          <div className="login">
            <p>Hej {user.email} </p>
            <button onClick={logOut}>Wyloguj sie</button>
          </div>
        ) : (
          <div className="login">
            <NavLink to="/login">Zaloguj</NavLink>
            <NavLink to="/registration">Załóż konto</NavLink>
          </div>
        )}

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
          <Route path="/logout" component={Logout} exact={true} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
