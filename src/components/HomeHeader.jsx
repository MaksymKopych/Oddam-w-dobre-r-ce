import React from "react";
import { HomeMain } from "./HomeMain";
import { HomeNavbar } from "./HomeNavbar";
import backgroundImage from "../assets/Home-Hero-Image.jpg";
export const HomeHeader = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionX: "-10%",
      }}
    >
      <HomeNavbar />
      <div className="header-sections">
        <HomeMain />
      </div>
    </div>
  );
};
