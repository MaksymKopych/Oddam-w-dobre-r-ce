import React from "react";
import { HomeAboutUs } from "../components/HomeAboutUs";
import { HomeContacts } from "../components/HomeContacts";
import { HomeFooter } from "../components/HomeFooter";
import { HomeHeader } from "../components/HomeHeader";
import { HomeInfo } from "../components/HomeInfo";
import { HomeMain } from "../components/HomeMain";
import { HomeOrganizations } from "../components/HomeOrganizations";
import { HomeSteps } from "../components/HomeSteps";

export const Home = () => {
  return (
    <div className="contener">
      <div className="header">
        <img
          className="header-img"
          src={require("../assets/Home-Hero-Image.jpg")}
          alt="header-img"
        ></img>
        <div className="header-sections">
          <HomeHeader />
          <HomeMain />
        </div>
      </div>
      <HomeInfo />
      <HomeSteps />
      <HomeAboutUs />
      <HomeOrganizations />
      <HomeContacts />
      <HomeFooter />
    </div>
  );
};
