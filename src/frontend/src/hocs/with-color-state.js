import {compose, withState} from "recompose";

const withColorState = compose(withState("color", "setColor", "white"));

export default withColorState;
