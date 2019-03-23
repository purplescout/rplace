import {compose, lifecycle} from "recompose";
import {toast} from "react-toastify";

import socket from "../utils/socket";

console.log(toast.TYPE);
const withToast = compose(
  lifecycle({
    componentDidMount() {
      socket.on("toast", onToast);
    },
  })
);

export default withToast;

const defaultOptions = {
  pauseOnHover: false,
  // className: 'black-background',
  // bodyClassName: "grow-font-size",
  // progressClassName: 'fancy-progress-bar'
};

function onToast({content, options = {}}) {
  if (!content) {
    return console.error("no content in toast payload", {content, options});
  }
  const {type = "info"} = options;

  try {
    toast[type](content, {
      defaultOptions,
      ...options,
    });
  } catch (error) {
    console.error(error);
  }
}
