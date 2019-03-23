import React from "react";
import withTimer from "../hocs/with-timer";

const Timer = (props) => {
  const {timer} = props;
  return <div className="timerFrame">{timer}</div>;
};

export default withTimer(Timer);
