import React from "react";
import { NavLink } from "react-router-dom";
import decor from "../assets/Decoration.svg";
export const Logout = () => {
  return (
    <div className="loginScreen">
      <h1>Wylogowanie nastąpiło pomyślnie !</h1>
      <img src={decor} alt="decoration" />

      <div className="login-form-btns">
        <NavLink to="/">Strona glowna</NavLink>
      </div>
    </div>
  );
};
