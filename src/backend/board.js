import {times} from "lodash";
const COLS = 40;
const ROWS = 30;
const DEFAULT_COLOR = "white";

export function getBoard() {
  return times(ROWS).map(getRow);
}

export function updateCell(board, updatedCell) {
  return board.map((row) => {
    return row.map((cell) => {
      if (cell.id === updatedCell.id) {
        return updatedCell;
      }
      return cell;
    });
  });
}

function getRow() {
  return times(COLS).map(getCell);
}

function getCell() {
  return {
    color: DEFAULT_COLOR,
    id: String(Math.random()),
  };
}

console.log(1);
