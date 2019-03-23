import React from "react";

import {COLORS} from "../constants";
import {chunk} from "lodash";
console.log(`*** COLORS`, COLORS);
const ColorChart = (props) => {
  const {setColor} = props;

  const [colorArrayLeftPanel, colorArrayRightPanel] = chunk(COLORS, 10);

  return (
    <div className="colorchart">
      <div className="color-group">
        {colorArrayLeftPanel.map((color, index) => {
          return (
            <div
              className="color-block"
              onClick={() => setColor(color)}
              key={index}
            >
              <div className="js-color" style={{backgroundColor: color}} />
            </div>
          );
        })}
      </div>
      <div className="color-group">
        {colorArrayRightPanel.map((color, index) => {
          return (
            <div
              className="color-block"
              onClick={() => setColor(color)}
              key={index}
            >
              <div className="js-color" style={{backgroundColor: color}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorChart;
