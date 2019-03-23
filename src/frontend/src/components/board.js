import React from "react";
import withBoard from "../hocs/with-board";

const Board = (props) => {
  console.log(props);

  return (
    <div>
      {props.board.forEach((element) => {
        element.forEach((tile) => {
          return (
            <div className="tile" style={`backgroundColor: ${tile.color}`} />
          );
        });
      })}
    </div>
  );
};

export default withBoard(Board);
