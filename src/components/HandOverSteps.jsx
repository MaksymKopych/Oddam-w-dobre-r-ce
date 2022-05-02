import React, { useContext, useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Context, db } from "../App";
import { StepConfirm } from "./StepConfirm";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { StepSuccess } from "./StepSuccess";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const HandOverSteps = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const [adres, setAdres] = useState({
    street: "",
    sity: "",
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
  const postMethod = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `${user.uid}`), handOverForm).then(
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
        <BrowserRouter>
          <Context.Provider
            value={{ handOverForm, setHandOverForm, adres, setAdres }}
          >
            <Switch>
              <Route path="/oddaj-rzeczy" component={StepOne} exact />
              <Route path="/oddaj-rzeczy-2" component={StepTwo} exact />
              <Route path="/oddaj-rzeczy-3" component={StepThree} exact />
              <Route path="/oddaj-rzeczy-4" component={StepFour} exact />
              <Route path="/oddaj-rzeczy-5" component={StepConfirm} exact />
              <Route path="/oddaj-rzeczy-6" component={StepSuccess} exact />
            </Switch>
          </Context.Provider>
        </BrowserRouter>
      </form>
    </div>
  );
};
