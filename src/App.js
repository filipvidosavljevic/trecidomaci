import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Igra from "./Igra";
import Pravila from "./PravilaIgre";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/igra">
          <Igra />
        </Route>
        <Route path="/pravila">
          <Pravila />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
