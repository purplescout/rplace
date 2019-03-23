/* eslint-disable */
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GameOne from "./pages/gameone";
import "./App.css";
//---------------------------------------
// Imports and constants
//---------------------------------------

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={GameOne} />
          {/*<Route path="/administration" render={Administration} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
