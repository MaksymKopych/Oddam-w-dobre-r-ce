import { AppRouter } from "./routes/AppRouter";
import { getAuth } from "firebase/auth";
import { createContext } from "react";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "./utils/firebase";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const Context = createContext();

function App() {
  return (
    // <BrowserRouter>
    <Context.Provider value={{ auth }}>
      <AppRouter />
    </Context.Provider>

    // {/* </BrowserRouter> */}
  );
}

export default App;
