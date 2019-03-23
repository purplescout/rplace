import fs from "fs";

const STATE_FILE_PATH = "./state.json";
export function flushState(state, timeout = 1000) {
  saveState(state);

  setTimeout(() => {
    flushState(state, timeout);
  }, timeout);
}

export function fetchState() {
  try {
    const stringified = fs.readFileSync(STATE_FILE_PATH, "utf8");
    const json = JSON.parse(stringified);

    return json;
  } catch (error) {
    console.error("error parsing state", error);
  }

  return {};
}

function saveState(state) {
  const serialized = JSON.stringify(state);

  fs.writeFile(STATE_FILE_PATH, serialized, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
