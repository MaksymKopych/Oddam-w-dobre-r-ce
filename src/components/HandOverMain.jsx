import React from "react";
import decor from "../assets/Decoration.svg";

export const HandOverMain = () => {
  return (
    <div className="main">
      <div className="main-text">
        <p
          style={{
            textTransform: "uppercase",
          }}
        >
          Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
        </p>
        <img src={decor} alt="decor" />
      </div>
      <div className="main-contener">
        <p>Wystarczą 4 proste kroki:</p>
        <div className="main-steps">
          <div>
            <span>1</span>
            <p>Wybierz rzeczy</p>
          </div>
          <div>
            <span>2</span>
            <p>Spakuj je w worki</p>
          </div>
          <div>
            <span>3</span>
            <p>Wybierz fundację</p>
          </div>
          <div>
            <span>4</span>
            <p>Zamów kuriera</p>
          </div>
        </div>
      </div>
    </div>
  );
};
