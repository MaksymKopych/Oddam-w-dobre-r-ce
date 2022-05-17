import React, { useContext } from "react";
import { Context } from "../App";

export const StepOne = () => {
  const { handOverForm, setHandOverForm, step, setStep } = useContext(Context);

  return (
    <>
      <span>Krok 1/4</span>

      <div className="hand-over-form-inputs">
        <p>Zaznacz co chcesz oddać:</p>
        <label>
          <input
            name="things"
            value="ubrania w dobrym stanie"
            type="radio"
            form="handOver"
            checked={
              handOverForm.things === "ubrania w dobrym stanie" ? true : false
            }
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, things: e.target.value });
            }}
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
            checked={
              handOverForm.things === "ubrania, do wyrzucenia" ? true : false
            }
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, things: e.target.value });
            }}
          />
          <span></span>
          ubrania, do wyrzucenia
        </label>

        <label>
          <input
            name="things"
            value="zabawek"
            type="radio"
            form="handOver"
            checked={handOverForm.things === "zabawek" ? true : false}
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, things: e.target.value });
            }}
          />
          <span></span>
          zabawki
        </label>

        <label>
          <input
            name="things"
            value="książki"
            type="radio"
            form="handOver"
            checked={handOverForm.things === "książki" ? true : false}
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, things: e.target.value });
            }}
          />
          <span></span>
          książki
        </label>

        <label>
          <input
            name="things"
            value="inne"
            type="radio"
            form="handOver"
            checked={handOverForm.things === "inne" ? true : false}
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, things: e.target.value });
            }}
          />
          <span></span>
          Inne
        </label>
      </div>
      <div className="hand-over-form-btns">
        {handOverForm.things.length ? (
          <button
            onClick={() => {
              setStep(2);
            }}
          >
            Dalej
          </button>
        ) : (
          <button disabled>Dalej</button>
        )}
      </div>
    </>
  );
};
