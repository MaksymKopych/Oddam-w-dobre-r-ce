import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";

export const StepOne = () => {
  const { handOverForm, setHandOverForm } = useContext(Context);

  return (
    <>
      <span>Krok 1/4</span>

      <div
        className="hand-over-form-inputs"
        onChange={(e) => {
          setHandOverForm({ ...handOverForm, things: e.target.value });
        }}
      >
        <p>Zaznacz co chcesz oddać:</p>
        <label>
          <input
            name="things"
            value="ubrania w dobrym stanie"
            type="radio"
            form="handOver"
          />
          <span></span>
          ubrania, które nadają się do ponownego użycia
        </label>

        <label>
          <input
            name="things"
            value="ubrania, do wyrzucenia"
            type="radio"
            form="handOver"
          />
          <span></span>
          ubrania, do wyrzucenia
        </label>

        <label>
          <input name="things" value="zabawek" type="radio" form="handOver" />
          <span></span>
          zabawki
        </label>

        <label>
          <input name="things" value="książki" type="radio" form="handOver" />
          <span></span>
          książki
        </label>

        <label>
          <input name="things" value="inne" type="radio" form="handOver" />
          <span></span>
          Inne
        </label>
      </div>
      <div className="hand-over-form-btns">
        {handOverForm.things.length ? (
          <NavLink to="/oddaj-rzeczy-2">Dalej</NavLink>
        ) : (
          <a href={false}>Dalej</a>
        )}
      </div>
    </>
  );
};
