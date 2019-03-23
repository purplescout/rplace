import React from "react";
import withBoard from "../hocs/with-board";
import styled from "styled-components";

const Board = (props) => {
  const {board, cellClicked, color: selectedColor} = props;

  if (!board) {
    return null;
  }

  const tileSize = 800 / board.length;

  return (
    <div className="board">
      {board.map((row) => {
        return row.map((cell) => {
          const {color, id} = cell;
          const disabled = color === selectedColor;

          return (
            <Cell
              disabled={disabled}
              hoverColor={selectedColor}
              color={color}
              tileSize={tileSize}
              onClick={() => cellClicked(cell, color)}
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
  margin-bottom: -3px;

  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};

  background-color: ${({color}) => color};

  &:hover {
    background-color: ${({hoverColor}) => hoverColor} !important;
  }
`;

export default withBoard(Board);
