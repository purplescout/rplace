import React from "react";
import {ProgressBar} from "react-bootstrap";
import withBoard from "../hocs/with-board";
import styled from "styled-components";

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
    <Bar>
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
    </Bar>
  );
};

const Bar = styled.div`
  clear: both;
  width: calc(100% - 100px);
  margin: 0 50px;
  padding: 20px;
  background: #eee;
`;

export default withBoard(LeaderBoard);
