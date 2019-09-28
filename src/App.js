import React from "react";
import "./assets/style/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage/index";
import PageTeamSelect from "./views/PageTeamSelect";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/teams" component={PageTeamSelect} />
        {/* <Route exact path="/topic" component={TopicsPage}/> */}
      </Router>
    </div>
  );
}

export default App;
