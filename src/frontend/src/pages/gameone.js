/* eslint-disable */
import React from "react";
import Board from "../components/board";
import ColorChart from "../components/colorChart";

//---------------------------------------
// Imports and constants
//---------------------------------------

const GameOne = () => {
  return (
    <div className="board">
      <Board />
      <ColorChart />
    </div>
  );
};

export default GameOne;
