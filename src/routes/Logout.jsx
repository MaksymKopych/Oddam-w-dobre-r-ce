import React from "react";
import { NavLink } from "react-router-dom";
import decor from "../assets/Decoration.svg";
import { HomeNavbar } from "../components/HomeNavbar";
export const Logout = () => {
  return (
    <>
      <HomeNavbar />
      <div className="loginScreen">
        <h1>Wylogowanie nastąpiło pomyślnie !</h1>
        <img src={decor} alt="decoration" />

        <div className="logout-btn">
          <NavLink to="/">Strona glowna</NavLink>
        </div>
      </div>
    </>
  );
};
