import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import decor from "../assets/Decoration.svg";
import dress from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import zoom from "../assets/Icon-3.svg";
import arrows from "../assets/Icon-4.svg";
export const HomeSteps = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div className="home-steps">
      <div className="home-steps-text">
        <h2> Wystarczy 4 proste kroki</h2>
        <img src={decor} alt="decor" />
      </div>
      <div className="home-steps-instructions">
        <div className="instruction">
          <img src={dress} alt="decor" />
          <p>Wybierz rzeczy</p>
          <span className="line"></span>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="instruction">
          <img src={bag} alt="decor" />
          <p>Spakuj je</p>
          <span className="line"></span>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="instruction">
          <img src={zoom} alt="decor" />
          <p>Zdecyduj komu chcesz pomóc</p>
          <span className="line"></span>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="instruction">
          <img src={arrows} alt="decor" />
          <p>Zamów kuriera</p>
          <span className="line"></span>
          <p>kurier przyjedzie w dogodnym termine</p>
        </div>
      </div>
      {user ? (
        <NavLink to="/oddaj-rzeczy">
          Oddaj<br></br>rzeczy
        </NavLink>
      ) : (
        <NavLink to="/login">
          Oddaj<br></br>rzeczy
        </NavLink>
      )}
    </div>
  );
};
