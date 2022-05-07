import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import decor from "../assets/Decoration.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../App";
import { HomeNavbar } from "../components/HomeNavbar";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);
  let history = useHistory();
  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <HomeNavbar />
      <div className="loginScreen">
        <h1>Zaloguj się</h1>
        <img src={decor} alt="decoration" />
        <form className="login-form" onSubmit={singIn}>
          <div className="login-form-inputs">
            <div>
              <label htmlFor="login-email">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="login-email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="login-password">Haslo</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="login-password"
                type="password"
              />
            </div>
          </div>

          <div className="login-form-btns">
            <NavLink to="/registration">Zalóż konto</NavLink>
            <button>Zaloguj się</button>
          </div>
        </form>
      </div>
    </>
  );
};
