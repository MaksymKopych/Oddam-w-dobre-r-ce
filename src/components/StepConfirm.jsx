import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Context, db } from "../App";
import dress from "../assets/Icon-1.svg";

import arrow from "../assets/Icon-4.svg";
export const StepConfirm = () => {
  const { handOverForm, setHandOverForm } = useContext(Context);
  //   const { auth } = useContext(Context);
  //   const [user] = useAuthState(auth);
  //   const postMethod = async (e) => {
  //     e.preventDefault();
  //     await addDoc(collection(db, `${user.uid}`), handOverForm).then(
  //       setHandOverForm({
  //         things: "",
  //         count: "",
  //         location: "",
  //         helpTo: "",
  //         fund: "",
  //         adres: "",
  //       })
  //     );
  //   };
  return (
    <>
      <h2>Podsumowanie Twojej darowizny</h2>
      <div className="hand-over-form-inputs">
        <p>Oddajesz:</p>
        <div className="hand-over-form-info">
          <div>
            <img src={dress} alt="dress" />
            <span>{`${handOverForm.count} worków, ${handOverForm.things}, ${handOverForm.helpTo}`}</span>
          </div>
          <div>
            <img src={arrow} alt="dress" />
            <span> {`dla lokalizacji: ${handOverForm.location}`}</span>
          </div>
        </div>
        <div className="hand-over-form-adres">
          <div className="adres">
            <h2>Adres odbioru:</h2>
            <div className="adres-text">
              <p>Ulica</p>
              <span>{handOverForm.adres.street}</span>
            </div>
            <div className="adres-text">
              <p>Miasto</p>
              <span>{handOverForm.adres.sity}</span>
            </div>
            <div className="adres-text">
              <p>Kod pocztowy</p>
              <span>{handOverForm.adres.postCode}</span>
            </div>
            <div className="adres-text">
              <p>Numer telefonu</p>
              <span>{handOverForm.adres.phone}</span>
            </div>
          </div>
          <div className="adres">
            <h2>Termin odbioru:</h2>
            <div className="adres-text">
              <p>Data</p>
              <span>{handOverForm.adres.date}</span>
            </div>
            <div className="adres-text">
              <p>Godzina</p>
              <span>{handOverForm.adres.time}</span>
            </div>
            <div className="adres-text">
              <p>Uwagi dla kuriera</p>
              <span>{handOverForm.adres.descriptions}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hand-over-form-btns">
        <NavLink to="/oddaj-rzeczy-4">Wstecz</NavLink>
        <button
          style={{
            cursor: "pointer",
          }}
        >
          Potwierdzam
        </button>
      </div>
    </>
  );
};
