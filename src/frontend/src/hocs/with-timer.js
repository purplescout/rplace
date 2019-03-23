import {compose, withState, lifecycle, withProps} from "recompose";

import socket from "../utils/socket";

const withTimer = compose(
  withState("timer", "setTimer", null),
  withState("timerRunning", "setTimerRunning", null),
  lifecycle({
    componentDidMount() {
      console.log(`*** 1`, 1);
      const {setTimerRunning, setTimer} = this.props;
      socket.on("setTimerRunning", setTimerRunning);
      socket.on("setTimer", setTimer);
      socket.emit("getTimer");
    },
  }),
  withProps({
    startTimer: () => socket.emit("startTimer"),
    restartTimer: () => socket.emit("restartTimer"),
  })
);

export default withTimer;
