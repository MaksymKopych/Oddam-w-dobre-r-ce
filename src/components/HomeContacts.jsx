import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../App";
import decor from "../assets/Decoration.svg";
import { HomeFooter } from "./HomeFooter";
import { useForm } from "react-hook-form";
export const HomeContacts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const postContactForm = async (data) => {
    await addDoc(collection(db, "contacts"), {
      name: data.name,
      email: data.contactEmail,
      message: data.contactMessage,
    }).then(reset());
  };
  const onSubmit = (data) => {
    postContactForm(data);
  };
  return (
    <div className="home-contacts" id="contacts">
      <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>Skontaktuj się z nami</h2>
        <img src={decor} alt="decor" />
        <div className="home-contacts-inputs">
          <div className="home-contacts-input">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input
              placeholder="Krzysztof"
              {...register("name", {
                required: "Nie może być puste",
                minLength: {
                  value: 3,
                  message: "Imie za krotkie min 3 znaki",
                },
              })}
            />
            {errors?.name && (
              <p
                style={{
                  color: "red",
                  paddingTop: "10px",
                }}
              >
                {errors?.name?.message || "error"}
              </p>
            )}
          </div>
          <div className="home-contacts-input">
            <label htmlFor="contactEmail">Wpisz swój email</label>
            <input
              type="email"
              placeholder="abc@xyz.pl"
              {...register("contactEmail", {
                required: "Nie może być puste",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                  message: "Nie prawidlowy Email",
                },
              })}
            />
            {errors?.contactEmail && (
              <p
                style={{
                  color: "red",
                  paddingTop: "10px",
                }}
              >
                {errors?.contactEmail?.message || "error"}
              </p>
            )}
          </div>
        </div>
        <div className="home-contacts-massage">
          <label htmlFor="massage">Wpisz swoją wiadomość</label>
          <textarea
            {...register("contactMessage")}
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
