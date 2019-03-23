import {compose, withState, lifecycle, withProps} from "recompose";

import socket from "../utils/socket";

const withTimer = compose(
  withState("board", "setBoard", null),
  lifecycle({
    componentDidMount() {
      const {setBoard} = this.props;
      socket.on("setBoard", setBoard);
      socket.emit("getBoard");
    },
  }),
  withProps({
    cellClicked: cellClicked,
  })
);

export default withTimer;

function cellClicked(cell, color) {
  socket.emit("clickCell", {
    ...cell,
    color,
  });
}
