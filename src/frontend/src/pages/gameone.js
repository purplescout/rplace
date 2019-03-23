/* eslint-disable */
import React from "react";
import Board from "../components/board";
import ColorChart from "../components/colorChart";
import LeaderBoard from "../components/leaderboard";
import Timer from "../components/timer";
import withColorState from "../hocs/with-color-state";

//---------------------------------------
// Imports and constants
//---------------------------------------

const GameOne = (props) => {
  const {setColor, color} = props;
  return (
    <div className="wrapper">
      <ColorChart setColor={setColor} color={color} />
      <Board color={color} />
      <Timer />
      <LeaderBoard />
    </div>
  );
};

export default withColorState(GameOne);
