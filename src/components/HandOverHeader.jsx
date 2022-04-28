import React from "react";
import backgroundImage from "../assets/Form-Hero-Image.jpg";
import { HandOverMain } from "./HandOverMain";
import { HomeNavbar } from "./HomeNavbar";

export const HandOverHeader = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <HomeNavbar />
      <div className="header-sections">
        <HandOverMain />
      </div>
    </div>
  );
};
