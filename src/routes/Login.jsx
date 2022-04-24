import React from "react";
import { NavLink } from "react-router-dom";
import decor from "../assets/Decoration.svg";

export const Login = () => {
  return (
    <div className="loginScreen">
      <h1>Zaloguj się</h1>
      <img src={decor} alt="decoration" />
      <form className="login-form">
        <div className="login-form-inputs">
          <div>
            <label htmlFor="login-email">Email</label>
            <input name="login-email" type="email" />
          </div>
          <div>
            <label htmlFor="login-password">Haslo</label>
            <input name="login-password" type="password" />
          </div>
        </div>

        <div className="login-form-btns">
          <NavLink to="/registration">Zalóż konto</NavLink>
          <button>Zaloguj się</button>
        </div>
      </form>
    </div>
  );
};
