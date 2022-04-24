import React from "react";
import { HomeMain } from "./HomeMain";

export const HomeHeader = () => {
  return (
    <div className="header">
      <img
        className="header-img"
        src={require("../assets/Home-Hero-Image.jpg")}
        alt="header-img"
      ></img>
      <div className="header-sections">
        <HomeMain />
      </div>
    </div>
  );
};
