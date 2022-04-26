import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import decor from "../assets/Decoration.svg";

export const Registration = () => {
  const { auth } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const registr = (e) => {
    e.preventDefault();
    if (password === secondPassword && email) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setEmail("");
          setPassword("");
          setSecondPassword("");
          window.location.href = "/login";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      console.log("wypelni");
    }
  };

  return (
    <div className="loginScreen">
      <h1>Zalóż konto</h1>
      <img src={decor} alt="decoration" />
      <form className="login-form" onSubmit={registr}>
        <div className="login-form-inputs">
          <div>
            <label htmlFor="register-email">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="register-email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="register-password">Haslo</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="register-password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="register-password">Powtorz haslo</label>
            <input
              value={secondPassword}
              onChange={(e) => {
                setSecondPassword(e.target.value);
              }}
              name="register-password"
              type="password"
            />
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
