import React from "react";
import withBoard from "../hocs/with-board";

const Board = (props) => {
  const {board, cellClicked} = props;

  return (
    <div className="board">
      {!board && "no board, mofos"}
      {board &&
        board.map((element) => {
          return element.map((tile) => {
            return (
              <div
                className="tile"
                onClick={() => cellClicked(tile)}
                key={tile.id}
                style={{backgroundColor: tile.color}}
              />
            );
          });
        })}
    </div>
  );
};

export default withBoard(Board);
