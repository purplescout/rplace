import {compose, withProps} from "recompose";
import {times} from "lodash";

const ROWS = 20;
const COLS = 20;

const withBoard = compose(
  withProps({
    board: getBoard(),
  })
);

export default withBoard;

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
  };
}

console.log(`*** getBoard(),`, getBoard());
