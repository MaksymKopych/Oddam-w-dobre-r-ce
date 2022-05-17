import { AppRouter } from "./routes/AppRouter";
import { getAuth } from "firebase/auth";
import { createContext } from "react";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "./utils/firebase";
import { getFirestore } from "firebase/firestore";
import { Login } from "./routes/Login";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const Context = createContext();

function App() {
  return (
    <Context.Provider value={{ auth }}>
      <AppRouter />
    </Context.Provider>
  );
}

export default App;
