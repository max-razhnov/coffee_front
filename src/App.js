import React from "react";
import "./assets/style/App.scss";
import LoginPage from "./views/LoginPage/index";
import PageTeamSelect from "./views/PageTeamSelect";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/teams" component={PageTeamSelect} />
      </Router>
    </div>
  );
}

export default App;
