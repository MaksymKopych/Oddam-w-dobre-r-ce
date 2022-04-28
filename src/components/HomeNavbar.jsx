import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
// import Link from "react-scroll/modules/components/Link";

export const HomeNavbar = () => {
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
    <div className="navbar">
      {user ? (
        <div className="login">
          <p>Hej {user.email} </p>
          <NavLink to="/oddaj-rzeczy">Oddaj rzeczy</NavLink>
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
            <a href="/#info">O co chodzi?</a>
          </li>
          <li>
            <a href="/#about">O nas</a>
          </li>
          <li>
            <a href="/#organizations">Fundacja i organizacje</a>
          </li>
          <li>
            <a href="/#contacts">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
