import React from "react";
import decor from "../assets/Decoration.svg";

export const HomeOrganizations = () => {
  return (
    <div className="home-organization" id="organizations">
      <div className="heading">
        <h2>Komu pomagamy ?</h2>
        <img src={decor} alt="decor" />
      </div>
      {/* <div className="organizations-links"></div> */}
      <div className="slider"></div>
    </div>
  );
};
