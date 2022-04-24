// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { HomeNavbar } from "./components/HomeNavbar";
import { AppRouter } from "./routes/AppRouter";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";

function App() {
  return (
    // <BrowserRouter>
    <AppRouter />
    // {/* </BrowserRouter> */}
  );
}

export default App;
