import {compose, withState, lifecycle, withProps} from "recompose";

import socket from "../utils/socket";

const withBoard = compose(
  withState("board", "setBoard", null),
  lifecycle({
    componentDidMount() {
      const {setBoard} = this.props;
      socket.on("setBoard", setBoard);
      socket.emit("getBoard");
    },
  }),
  withProps(console.log),
  withProps({
    cellClicked: cellClicked,
  })
);

export default withBoard;

function cellClicked(cell) {
  socket.emit("clickCell", {
    ...cell,
    color: "green",
  });
}
