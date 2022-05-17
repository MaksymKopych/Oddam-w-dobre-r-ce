import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Context } from "../App";
import decor from "../assets/Decoration.svg";
import { HomeNavbar } from "../components/HomeNavbar";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const [err, setErr] = useState(false);
  const errorMessage = "Hasła nie pasują";
  const registr = (data) => {
    if (data.registerPassword === data.registerPassword2) {
      createUserWithEmailAndPassword(
        auth,
        data.registerEmail,
        data.registerPassword
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          signInWithEmailAndPassword(
            auth,
            data.registerEmail,
            data.registerPassword
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              history.push("/");
              reset();
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      setErr(true);
    }
  };
  const onSubmit = (data) => {
    registr(data);
  };
  const { auth } = useContext(Context);
  const history = useHistory();

  return (
    <>
      <HomeNavbar />
      <div className="loginScreen">
        <h1>Zalóż konto</h1>
        <img src={decor} alt="decoration" />
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-inputs">
            <div>
              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                {...register("registerEmail", {
                  required: "Nie może być puste",
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                    message: "Nie prawidlowy Email",
                  },
                })}
              />
              {errors?.registerEmail && (
                <p
                  style={{
                    color: "red",
                    paddingTop: "10px",
                  }}
                >
                  {errors?.registerEmail?.message || "error"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="registerPassword">Haslo</label>
              <input
                type="password"
                {...register("registerPassword", {
                  required: "Nie może być puste",
                  minLength: {
                    value: 6,
                    message: "Haslo za krotkie min 6 znakow",
                  },
                })}
              />
              {errors?.registerPassword && (
                <p
                  style={{
                    color: "red",
                    paddingTop: "10px",
                  }}
                >
                  {errors?.registerPassword?.message || "error"}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="registerPassword2">Powtorz haslo</label>
              <input
                type="password"
                {...register("registerPassword2", {
                  required: "Nie może być puste",
                  minLength: {
                    value: 6,
                    message: "Haslo za krotkie min 6 znakow",
                  },
                })}
              />
              {errors?.registerPassword2 && (
                <p
                  style={{
                    color: "red",
                    paddingTop: "10px",
                  }}
                >
                  {errors?.registerPassword2?.message || "error"}
                </p>
              )}
              {err && (
                <p
                  style={{
                    color: "red",
                    paddingTop: "10px",
                  }}
                >
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
          <div className="login-form-btns">
            <NavLink to="/login">Zaloguj się</NavLink>
            <button type="submit">Zalóż konto</button>
          </div>
        </form>
      </div>
    </>
  );
};
