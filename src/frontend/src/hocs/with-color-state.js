import {compose, withState} from "recompose";

import {COLORS} from "../constants";
import {sample} from "lodash";

const randomColor = sample(COLORS);
const withColorState = compose(withState("color", "setColor", randomColor));

export default withColorState;
