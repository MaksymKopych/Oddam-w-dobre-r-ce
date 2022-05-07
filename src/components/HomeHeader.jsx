import React from "react";
import { HomeMain } from "./HomeMain";
import { HomeNavbar } from "./HomeNavbar";
import backgroundImage from "../assets/Home-Hero-Image.jpg";
export const HomeHeader = () => {
  return (
    <div
      className="header"
      style={{
        background: ` transparent url(${backgroundImage}) 0% 0% no-repeat padding-box `,
        backgroundPosition: "-483px",
      }}
    >
      <HomeNavbar />
      <div className="header-sections">
        <HomeMain />
      </div>
    </div>
  );
};
