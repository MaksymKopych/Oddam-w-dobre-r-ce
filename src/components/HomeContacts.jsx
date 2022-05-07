import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../App";
import decor from "../assets/Decoration.svg";
import { HomeFooter } from "./HomeFooter";

export const HomeContacts = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    massege: "",
  });
  const postContactForm = async (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.massege) {
      await addDoc(collection(db, "contacts"), contactForm).then(
        setContactForm({
          name: "",
          email: "",
          massege: "",
        })
      );
    } else {
      console.log("Wypelni");
    }
  };
  return (
    <div className="home-contacts" id="contacts">
      <form id="contactForm" onSubmit={postContactForm}>
        <h2>Skontaktuj się z nami</h2>
        <img src={decor} alt="decor" />
        <div className="home-contacts-inputs">
          <div className="home-contacts-input">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input
              value={contactForm.name}
              type="text"
              name="name"
              placeholder="Krzysztof"
              onChange={(e) => {
                setContactForm({ ...contactForm, name: e.target.value });
              }}
            />
          </div>
          <div className="home-contacts-input">
            <label htmlFor="email">Wpisz swój email</label>
            <input
              value={contactForm.email}
              type="email"
              name="email"
              placeholder="abc@xyz.pl"
              onChange={(e) => {
                setContactForm({ ...contactForm, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="home-contacts-massage">
          <label htmlFor="massage">Wpisz swoją wiadomość</label>
          <textarea
            value={contactForm.massege}
            form="contactForm"
            name="massage"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          asperiores temporibus modi autem voluptatum, eaque maiores! "
            onChange={(e) => {
              setContactForm({ ...contactForm, massege: e.target.value });
            }}
          />
        </div>
        <button>Wyślij</button>
      </form>
      <HomeFooter />
    </div>
  );
};
