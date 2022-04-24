import React from "react";
import { NavLink } from "react-router-dom";
import decor from "../assets/Decoration.svg";
export const Registration = () => {
  return (
    <div className="loginScreen">
      <h1>Zalóż konto</h1>
      <img src={decor} alt="decoration" />
      <form className="login-form">
        <div className="login-form-inputs">
          <div>
            <label htmlFor="register-email">Email</label>
            <input name="register-email" type="email" />
          </div>
          <div>
            <label htmlFor="register-password">Haslo</label>
            <input name="register-password" type="password" />
          </div>
          <div>
            <label htmlFor="register-password">Powtorz haslo</label>
            <input name="register-password" type="password" />
          </div>
        </div>

        <div className="login-form-btns">
          <NavLink to="/login">Zaloguj się</NavLink>
          <button>Zalóż konto</button>
        </div>
      </form>
    </div>
  );
};
