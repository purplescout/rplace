import React from "react";

const ColorChart = (props) => {
  const {setColor} = props;

  const colorArrayLeftPanel = [
    "#A93226",
    "#CB4335",
    "#884EA0",
    "#7D3C98",
    "#2471A3",
    "#2E86C1",
    "#17A589",
    "#138D75",
    "#229954",
    "#28B463",
  ];
  const colorArrayRightPanel = [
    "#D4AC0D",
    "#D68910",
    "#CA6F1E",
    "#BA4A00",
    "#D0D3D4",
    "#A6ACAF",
    "#839192",
    "#707B7C",
    "#2E4053",
    "#273746",
  ];

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
