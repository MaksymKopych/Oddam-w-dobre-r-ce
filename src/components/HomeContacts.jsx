import React from "react";
import decor from "../assets/Decoration.svg";
import { HomeFooter } from "./HomeFooter";

export const HomeContacts = () => {
  return (
    <div className="home-contacts" id="contacts">
      <form id="contactForm">
        <h2>Skontaktuj się z nami</h2>
        <img src={decor} alt="decor" />
        <div className="home-contacts-inputs">
          <div className="home-contacts-input">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input type="text" name="name" placeholder="Krzysztof" />
          </div>
          <div className="home-contacts-input">
            <label htmlFor="email">Wpisz swój email</label>
            <input type="email" name="email" placeholder="abc@xyz.pl" />
          </div>
        </div>
        <div className="home-contacts-massage">
          <label htmlFor="massage">Wpisz swoją wiadomość</label>
          <textarea
            form="contactForm"
            name="massage"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          asperiores temporibus modi autem voluptatum, eaque maiores! "
          />
        </div>
        <button>Wyślij</button>
      </form>
      <HomeFooter />
    </div>
  );
};
