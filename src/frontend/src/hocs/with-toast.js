import {compose, lifecycle} from "recompose";
import {toast} from "react-toastify";

import socket from "../utils/socket";

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
