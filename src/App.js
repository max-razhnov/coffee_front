import React from "react";
import "./assets/style/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import PageTeamSelect from "./views/PageTeamSelect";
import NotFound from "./views/NotFound";
// import SubscriptionsPage from "./views/SubscriptionsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/*<Route exact path="/teams" component={PageTeamSelect} />*/}
          {/*<Route exact path="/topic" component={SubscriptionsPage}/>*/}
          {/*<Route exact path="/404" component={NotFound} />*/}
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
