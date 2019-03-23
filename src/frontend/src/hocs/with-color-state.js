import {compose, withProps} from "recompose";

let color = "white";

const withColorState = compose(
  withProps({
    color,
    selectedColor: selectedColor,
  })
);

export default withColorState;

function selectedColor(c) {
  console.log(c, "c");
  color = c;
  console.log(color, "color");
}
