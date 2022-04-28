import React from "react";
import { HandOverHeader } from "../components/HandOverHeader";
import { HandOverSteps } from "../components/HandOverSteps";
import { HomeContacts } from "../components/HomeContacts";
import { HomeFooter } from "../components/HomeFooter";

export const HandOver = () => {
  return (
    <>
      <HandOverHeader />
      <HandOverSteps />
      <HomeContacts />
      {/* <HomeFooter /> */}
    </>
  );
};
