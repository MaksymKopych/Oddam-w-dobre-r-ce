import React from "react";
import decor from "../assets/Decoration.svg";
export const StepSuccess = () => {
  return (
    <div className="success">
      <p>
        Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
        informacje o odbiorze.
      </p>
      <img src={decor} alt="" />
    </div>
  );
};
