import {compose, withState, lifecycle} from "recompose";

import socket from "../utils/socket";

const withTimer = compose(
  withState("timer", "setTimer", null),
  lifecycle({
    componentDidMount() {
      console.log(`*** 1`, 1);
      const {setTimer} = this.props;
      socket.on("setTimer", setTimer);
      socket.emit("getTimer");
    },
  })
);

export default withTimer;
