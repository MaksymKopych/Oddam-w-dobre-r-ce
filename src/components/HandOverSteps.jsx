import React, { useContext, useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { Context, db } from "../App";
import { StepConfirm } from "./StepConfirm";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { StepSuccess } from "./StepSuccess";

export const HandOverSteps = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const [adres, setAdres] = useState({
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    gescriptions: "",
  });
  const [handOverForm, setHandOverForm] = useState({
    things: "",
    count: "",
    location: "",
    helpTo: "",
    fund: "",
    adres: "",
  });
  const [step, setStep] = useState(1);
  const postMethod = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `${user.uid}`), handOverForm).then(
      setStep(6),
      setHandOverForm({
        things: "",
        count: "",
        location: "",
        helpTo: "",
        fund: "",
        adres: "",
      })
    );
  };

  const stepper = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepConfirm />;
      case 6:
        return <StepSuccess />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="hand-over-steps">
      <div className="hand-over-impotant">
        <h2>Wazne !</h2>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
      <form className="hand-over-form" id="handOver" onSubmit={postMethod}>
        <Context.Provider
          value={{
            handOverForm,
            setHandOverForm,
            adres,
            setAdres,
            step,
            setStep,
          }}
        >
          {stepper(step)}
        </Context.Provider>
      </form>
    </div>
  );
};
