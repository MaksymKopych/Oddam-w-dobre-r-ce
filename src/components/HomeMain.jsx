import React from "react";
import { NavLink } from "react-router-dom";
import decor from "../assets/Decoration.svg";
export const HomeMain = () => {
  return (
    <div className="home-main">
      <div className="home-main-text">
        <p>Zacznij pomagać!</p>
        <p> Oddaj niechciane rzeczy w zaufane ręce</p>
        <img src={decor} alt="decor" />
      </div>
      <div className="home-main-btns">
        <NavLink to="/login">Oddaj Rzeczy</NavLink>
        <button>Zorganizuj zbiórkę</button>
      </div>
    </div>
  );
};
