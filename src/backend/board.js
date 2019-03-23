import {times} from "lodash";
const ROWS = 10;
const COLS = 10;

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
  const color = Math.random() > 0.5 ? "red" : "blue";
  return {
    color,
    id: String(Math.random()),
  };
}

console.log(1);
