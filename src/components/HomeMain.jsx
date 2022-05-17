import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import decor from "../assets/Decoration.svg";
export const HomeMain = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div className="main">
      <div className="main-text">
        <p>Zacznij pomagać!</p>
        <p> Oddaj niechciane rzeczy w zaufane ręce</p>
        <img src={decor} alt="decor" />
      </div>
      <div className="main-btns">
        {user ? (
          <NavLink to="/oddaj-rzeczy">
            Oddaj<br></br>Rzeczy
          </NavLink>
        ) : (
          <NavLink to="/login">
            Oddaj<br></br>Rzeczy
          </NavLink>
        )}

        <button>Zorganizuj zbiórkę</button>
      </div>
    </div>
  );
};
