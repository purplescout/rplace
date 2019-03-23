/* eslint-disable */
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GameOne from "./pages/gameone";
import {ToastContainer} from "react-toastify";
import withToast from "./hocs/with-toast";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//---------------------------------------
// Imports and constants
//---------------------------------------

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Route exact path="/" render={GameOne} />
        {/*<Route path="/administration" render={Administration} />*/}
      </div>
    </Router>
  );
}

export default withToast(App);
