import React from "react";

import {COLORS} from "../constants";
import {chunk} from "lodash";

const ColorChart = (props) => {
  const {setColor, color: selectedColor} = props;

  const [colorArrayLeftPanel, colorArrayRightPanel] = chunk(COLORS, 10);

  return (
    <div className="colorchart">
      <div className="color-group">
        {colorArrayLeftPanel.map((color, index) => {
          return (
            <Color
              color={color}
              selected={selectedColor === color}
              onClick={() => setColor(color)}
              key={index}
            />
          );
        })}
      </div>
      <div className="color-group">
        {colorArrayRightPanel.map((color, index) => {
          return (
            <Color
              color={color}
              selected={selectedColor === color}
              onClick={() => setColor(color)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

function Color({color, onClick, selected}) {
  return (
    <div onClick={onClick} className="color-block">
      <div className="js-color" style={{backgroundColor: color}}>
        {selected ? "🍆" : null}
      </div>
    </div>
  );
}

export default ColorChart;
