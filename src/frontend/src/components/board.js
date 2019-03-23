import React from "react";
import withBoard from "../hocs/with-board";
import withTimer from "../hocs/with-timer";
import styled from "styled-components";

const Board = (props) => {
  const {board, cellClicked, color: selectedColor, timer, timerRunning} = props;
  console.log(timerRunning);
  if (!board) {
    return null;
  }

  const tileSize = 800 / board.length;

  return (
    <div className="board">
      {board.map((row) => {
        return row.map((cell) => {
          const {color, id} = cell;
          const disabled =
            color === selectedColor || !timerRunning || timer === 0;

          return (
            <Cell
              disabled={disabled}
              hoverColor={selectedColor}
              color={color}
              tileSize={tileSize}
              onClick={() => !disabled && cellClicked(cell, selectedColor)}
              key={id}
            />
          );
        });
      })}
    </div>
  );
};

const Cell = styled.div`
  width: ${({tileSize}) => tileSize}px;
  height: ${({tileSize}) => tileSize}px;
  display: inline-block;
  margin-bottom: -6px;

  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};

  background-color: ${({color}) => color};

  &:hover {
    background-color: ${({hoverColor}) => hoverColor} !important;
  }
`;

export default withTimer(withBoard(Board));
