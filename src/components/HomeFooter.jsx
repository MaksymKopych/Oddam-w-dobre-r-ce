import React from "react";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
export const HomeFooter = () => {
  return (
    <div className="home-footer">
      <p>Copyright by Coders Lab</p>
      <div className="home-footer-icons">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="facebook" />
      </div>
    </div>
  );
};
