import {compose, withProps} from "recompose";
import {times} from "lodash";

const ROWS = 20;
const COLS = 20;

const withBoard = compose(
  withProps({
    board: getBoard(),
    cellClicked: cellClicked,
  })
);

export default withBoard;

function cellClicked(cell) {
  console.log(cell);
}

function getBoard() {
  return times(ROWS).map(getRow);
}

function getRow() {
  return times(COLS).map(getCell);
}

function getCell() {
  const color = Math.random() > 0.5 ? "red" : "blue";
  return {
    color,
    id: String(Math.random()),
  };
}
