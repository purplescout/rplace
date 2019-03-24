import React from "react";
import withBoard from "../hocs/with-board";
import withTimer from "../hocs/with-timer";
import styled from "styled-components";

const Board = (props) => {
  const {board, cellClicked, color: selectedColor, timer, timerRunning} = props;

  if (!board) {
    return null;
  }

  const tileSize = window.innerHeight / board.length / 1.4;

  return (
    <BoardWrapper>
      {board.map((row) => {
        return (
          <div>
            {row.map((cell) => {
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
            })}
          </div>
        );
      })}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  display: inline-block;
  border: solid #ddd 2px;
  margin: 0 20px 20px 20px;
`;

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
