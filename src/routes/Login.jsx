import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import decor from "../assets/Decoration.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../App";
import { HomeNavbar } from "../components/HomeNavbar";
import { useForm } from "react-hook-form";
export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const { auth } = useContext(Context);
  const [err, setErr] = useState(false);
  const errorMessage = "Nieprawidłowy Email lub hasło";
  let history = useHistory();
  const singIn = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setErr(false);
        history.push("/");
        reset();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(true);
      });
  };
  const onSubmit = (data) => {
    singIn(data);
  };
  return (
    <>
      <HomeNavbar />
      <div className="loginScreen">
        <h1>Zaloguj się</h1>
        <img src={decor} alt="decoration" />
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-inputs">
            <div>
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Nie może być puste",
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                    message: "Nie prawidlowy Email",
                  },
                })}
              />
              {errors?.email && (
                <p
                  style={{
                    color: "red",
                    paddingTop: "10px",
                  }}
                >
                  {errors?.email?.message || "error"}
                </p>
              )}
              <span className="err"></span>
            </div>
            <div>
              <label htmlFor="login-password">Haslo</label>
              <input
                type="password"
                {...register("password", {
                  required: "Nie może być puste",
                  minLength: {
                    value: 6,
                    message: "Haslo za krotkie min 6 znakow",
                  },
                })}
              />
              {errors?.password && (
                <p
                  style={{
                    color: "red",
                    paddingTop: "10px",
                  }}
                >
                  {errors?.password?.message || "error"}
                </p>
              )}
            </div>
            {err && (
              <p
                style={{
                  color: "red",
                  padding: "10px",
                }}
              >
                {errorMessage}
              </p>
            )}
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
