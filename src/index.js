import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CharacterScreen from "./pages/CharacterScreen";
import EpisodeScreen from "./pages/EpisodeScreen";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./app.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav className="navigation">
        <Link className="links" to="/CharacterScreen">
          Character Screen
        </Link>
        <Link className="links" to="/EpisodeScreen">
          Episode Screen
        </Link>
      </nav>
      <Switch>
        <Route path="/CharacterScreen" component={CharacterScreen} />
        <Route path="/EpisodeScreen" component={EpisodeScreen} />
        <Route path="/" component={App} exact />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
