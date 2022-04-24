import React from "react";
import decor from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
export const HomeAboutUs = () => {
  return (
    <div className="home-about-us" id="about">
      <div className="home-about-us-text">
        <h2>O nas</h2>
        <img src={decor} alt="decor" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          asperiores temporibus modi autem voluptatum, eaque maiores! Rerum ut
          iure ratione, explicabo nam velit magnam maxime.
        </p>
        <img className="signature" src={signature} alt="signature" />
      </div>
      <img src={require("../assets/People.jpg")} alt="people" />
    </div>
  );
};
