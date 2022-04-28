import React from "react";

export const HandOverSteps = () => {
  return (
    <div className="hand-over-steps">
      <div className="hand-over-impotant">
        <h2>Wazne !</h2>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
      <form className="hand-over-form">
        <span>Krok 1/4</span>

        <div className="hand-over-form-inputs">
          <p>Zaznacz co chcesz oddać:</p>
          <label>
            <input name="reused" type="checkbox" />
            ubrania, które nadają się do ponownego użycia
          </label>

          <label>
            <input name="away" type="checkbox" />
            ubrania, do wyrzucenia
          </label>

          <label>
            <input name="toys" type="checkbox" />
            zabawki
          </label>

          <label>
            <input name="books" type="checkbox" />
            książki
          </label>

          <label>
            <input name="other" type="checkbox" />
            Inne
          </label>
        </div>
        <button>Dalej</button>
      </form>
    </div>
  );
};
