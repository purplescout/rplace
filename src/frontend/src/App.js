/* eslint-disable */
import React from "react";
import withBoard from "./hocs/with-board";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GameOne from "./pages/gameone";

import "./App.css";
//---------------------------------------
// Imports and constants
//---------------------------------------

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={GameOne} />
        {/*<Route path="/administration" render={Administration} />*/}
      </div>
    </Router>
  );
}

export default App;
