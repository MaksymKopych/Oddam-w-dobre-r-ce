import React, { useContext } from "react";
import { Context } from "../App";

export const StepTwo = () => {
  const { handOverForm, setHandOverForm, setStep } = useContext(Context);

  return (
    <>
      <span>Krok 2/4</span>

      <div className="hand-over-form-inputs">
        <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
        <label htmlFor="count">
          Liczba 60l worków:
          <select
            name="count"
            form="handOver"
            onChange={(e) => {
              setHandOverForm({ ...handOverForm, count: e.target.value });
            }}
            value={handOverForm.count}
          >
            <option value="">— wybierz —</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
      <div className="hand-over-form-btns">
        <button
          onClick={() => {
            setStep(1);
          }}
        >
          Wstecz
        </button>

        {handOverForm.count ? (
          <button
            onClick={() => {
              setStep(3);
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
