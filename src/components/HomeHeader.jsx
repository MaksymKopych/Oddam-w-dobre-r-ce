import React from "react";
// import { NavLink } from "react-router-dom";
// import Link from "react-scroll/modules/components/Link";

export const HomeHeader = () => {
  return (
    <div className="navbar">
      <div className="login">
        <a href="/login">Zaloguj</a>
        <a href="/registration">Załóż konto</a>
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
