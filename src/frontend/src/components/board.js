import React from "react";
import withBoard from "../hocs/with-board";
import withColorState from "../hocs/with-color-state";

const Board = (props) => {
  const {board, cellClicked, color} = props;
  let tileSize = 0;

  if (board) {
    tileSize = 800 / board.length;
  }

  return (
    <div className="board">
      {!board && "no board, mofos"}
      {board &&
        board.map((element) => {
          return element.map((tile) => {
            return (
              <div
                className="tile"
                onClick={() => cellClicked(tile, color)}
                key={tile.id}
                style={{
                  backgroundColor: tile.color,
                  width: tileSize,
                  height: tileSize,
                }}
              />
            );
          });
        })}
    </div>
  );
};

export default withBoard(Board);
