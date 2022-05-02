import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";

export const StepThree = () => {
  const { handOverForm, setHandOverForm } = useContext(Context);

  return (
    <>
      <span>Krok 3/4</span>

      <div className="hand-over-form-inputs">
        <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
        <label htmlFor="count">
          Lokalizacja:
          <select
            name="location"
            form="handOver"
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, location: e.target.value });
            }}
          >
            <option value="">— wybierz —</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
            <option value="Poznań">Poznań</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Katowice">Katowice</option>
          </select>
        </label>
        <p>Komu chcesz pomóc?</p>
        <div
          className="hand-over-form-helpTo"
          onChange={(e) => {
            setHandOverForm({ ...handOverForm, helpTo: e.target.value });
          }}
        >
          <label>
            <input
              name="helpTo"
              value="dzieciom"
              type="radio"
              form="handOver"
            />
            <span>dzieciom</span>
          </label>
          <label>
            <input
              name="helpTo"
              value="samotnym matkom"
              type="radio"
              form="handOver"
            />
            <span>samotnym matkom</span>
          </label>
          <label>
            <input
              name="helpTo"
              value="bezdomnym"
              type="radio"
              form="handOver"
            />
            <span>bezdomnym</span>
          </label>
          <label>
            <input
              name="helpTo"
              value="niepełnosprawnym"
              type="radio"
              form="handOver"
            />
            <span>niepełnosprawnym</span>
          </label>
          <label>
            <input
              name="helpTo"
              value="osobom starszym"
              type="radio"
              form="handOver"
            />
            <span>osobom starszym</span>
          </label>
        </div>
      </div>
      <div className="hand-over-form-funds">
        <label htmlFor="fund">
          Wpisz nazwę konkretnej organizacji (opcjonalnie)
        </label>
        <input
          name="fund"
          type="text"
          form="handOver"
          onChange={(e) => {
            setHandOverForm({ ...handOverForm, fund: e.target.value });
          }}
        />
      </div>
      <div className="hand-over-form-btns">
        <NavLink to="oddaj-rzeczy-2">Wstecz</NavLink>
        {handOverForm.location &&
        handOverForm.helpTo &&
        handOverForm.fund.length ? (
          <NavLink to="oddaj-rzeczy-4">Dalej</NavLink>
        ) : (
          <a href={false}>Dalej</a>
        )}
      </div>
    </>
  );
};
