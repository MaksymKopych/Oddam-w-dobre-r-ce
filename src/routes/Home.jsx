import React from "react";
import { HomeAboutUs } from "../components/HomeAboutUs";
import { HomeContacts } from "../components/HomeContacts";
import { HomeFooter } from "../components/HomeFooter";
import { HomeHeader } from "../components/HomeHeader";
import { HomeInfo } from "../components/HomeInfo";
import { HomeOrganizations } from "../components/HomeOrganizations";
import { HomeSteps } from "../components/HomeSteps";

export const Home = () => {
  return (
    // <div className="contener">
    <>
      <HomeHeader />
      <HomeInfo />
      <HomeSteps />
      <HomeAboutUs />
      <HomeOrganizations />
      <HomeContacts />
      <HomeFooter />
    </>

    // </div>
  );
};
