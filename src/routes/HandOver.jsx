import React from "react";
import { HandOverHeader } from "../components/HandOverHeader";
import { HandOverSteps } from "../components/HandOverSteps";
import { HomeContacts } from "../components/HomeContacts";

export const HandOver = () => {
  return (
    <>
      <HandOverHeader />
      <HandOverSteps />
      <HomeContacts />
    </>
  );
};
