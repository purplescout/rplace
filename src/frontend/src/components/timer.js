import React from "react";
import withTimer from "../hocs/with-timer";
import {Button} from "react-bootstrap";

const Timer = (props) => {
  const {timer, startTimer, restartTimer} = props;
  return (
    <div className="timerFrame">
      <h1>{timer}</h1>
      {timer > 119 && (
        <Button variant="success" onClick={startTimer}>
          Start game
        </Button>
      )}
      {timer === 0 && (
        <Button variant="danger" onClick={restartTimer}>
          Restart
        </Button>
      )}
    </div>
  );
};

export default withTimer(Timer);
