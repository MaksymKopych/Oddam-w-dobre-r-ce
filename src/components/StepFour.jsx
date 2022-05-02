import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";

export const StepFour = () => {
  const { adres, setAdres, handOverForm, setHandOverForm } =
    useContext(Context);

  return (
    <>
      <span>Krok 4/4</span>

      <div className="hand-over-form-inputs">
        <p>Podaj adres oraz termin odbioru rzecz przez kuriera</p>

        <div className="hand-over-form-adres">
          <div className="adres">
            <p>Adres odbioru:</p>
            <div className="adres-inputs">
              <div>
                <label htmlFor="street">Ulica</label>
                <input
                  name="street"
                  type="text"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, street: e.target.value });
                  }}
                />
              </div>

              <div>
                <label htmlFor="sity">Miasto</label>
                <input
                  name="sity"
                  type="text"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, sity: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="postCode">Kod pocztowy</label>
                <input
                  name="postCode"
                  type="text"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, postCode: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="phone">Numer telefonu</label>
                <input
                  name="phone"
                  type="phone"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, phone: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="date">
            <p>Termin odbioru:</p>
            <div className="date-inputs">
              <div>
                <label htmlFor="date">Data</label>
                <input
                  name="date"
                  type="date"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, date: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="time">Godzina</label>
                <input
                  name="time"
                  type="time"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, time: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="descriptions">Uwagi dla kuriera</label>
                <textarea
                  cols="30"
                  rows="5"
                  name="deskriptions"
                  form="handOver"
                  onChange={(e) => {
                    setAdres({ ...adres, descriptions: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hand-over-form-btns">
        <NavLink to="oddaj-rzeczy-3">Wstecz</NavLink>
        {adres.street &&
        adres.sity &&
        adres.postCode &&
        adres.phone &&
        adres.date &&
        adres.time ? (
          <NavLink
            onClick={() => {
              setHandOverForm({ ...handOverForm, adres: adres });
            }}
            to="oddaj-rzeczy-5"
          >
            Dalej
          </NavLink>
        ) : (
          <a href={false}>Dalej</a>
        )}
      </div>
    </>
  );
};
