import React from "react";
import { NavLink } from "react-router-dom";
// import Link from "react-scroll/modules/components/Link";

export const HomeNavbar = () => {
  return (
    <div className="navbar">
      <div className="login">
        <NavLink to="/login">Zaloguj</NavLink>
        <NavLink to="/registration">Załóż konto</NavLink>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/start">Start</a>
          </li>
          <li>
            <a href="/info">O co chodzi?</a>
          </li>
          <li>
            <a href="/about">O nas</a>
          </li>
          <li>
            <a href="/organizations">Fundacja i organizacje</a>
          </li>
          <li>
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
