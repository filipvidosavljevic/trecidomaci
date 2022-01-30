import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Igra from "./Igra";
import Navbar from "./Navbar";
import Pravila from "./PravilaIgre";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/igra">
        <Igra />
      </Route>
      <Route path="/pravila">
        <Pravila />
      </Route>
    </Router>
  );
}

export default App;
