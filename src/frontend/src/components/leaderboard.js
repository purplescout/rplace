import React from "react";
import {ProgressBar} from "react-bootstrap";
import withBoard from "../hocs/with-board";

const LeaderBoard = (props) => {
  const {board} = props;
  let valueArray = [];
  const values = {};

  if (board) {
    const flattenArray = [].concat.apply([], board);
    flattenArray.map((c, i) => {
      if (!values[c.color]) {
        values[c.color] = 1;
      } else {
        values[c.color]++;
      }
    });
    valueArray = Object.entries(values);
  }

  return (
    <div className="bar">
      <ProgressBar>
        {valueArray.map((val, i) => (
          <ProgressBar
            striped
            animated
            style={{backgroundColor: val[0]}}
            key={i}
            now={val[1]}
          />
        ))}
      </ProgressBar>
    </div>
  );
};

export default withBoard(LeaderBoard);
