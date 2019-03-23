import io from "socket.io";

import {getBoard, updateCell} from "./board";
import {addClient, removeClient, emitClients} from "./clients";
import {flushState, fetchState} from "./state";
import internalIp from "internal-ip";
import chalk from "chalk";

const server = io();
const SOCKET_PORT = 8000;
const APP_PORT = 3000;
const LAST_CELL_CLICK = "LAST_CELL_CLICK";

const configuration = {
  coolDown: 1 * 1000,
};

const oldState = fetchState();

const state = init(oldState);

function init(oldState) {
  return {
    board: getBoard(),
    timer: 120,
    ...oldState,
  };
}

// flush state every 1sec
flushState(state);

server.on("connection", (client) => {
  addClient(client);

  client.on("getBoard", () => {
    console.log("getBoard");
    client.emit("setBoard", state.board);
  });
  client.on("clickCell", (cell) => {
    const now = new Date().getTime();
    if (client[LAST_CELL_CLICK]) {
      const allowedAgain =
        client[LAST_CELL_CLICK].getTime() + configuration.coolDown;
      const waitTime = allowedAgain - now;
      if (waitTime > 0) {
        console.log("client clicked cell within cool down, ignoring");
        client.emit("toast", {
          content: "Cool down, bro",
          options: {
            type: "error",
            autoClose: waitTime,
          },
        });
        return;
      }
    }
    client[LAST_CELL_CLICK] = new Date();

    console.log("client clicked cell", cell);

    state.board = updateCell(state.board, cell);

    emitClients("setBoard", state.board);
    client.emit("toast", {
      content: "Wait for it....",
      options: {
        type: "info",
        autoClose: configuration.coolDown,
      },
    });
  });

  client.on("disconnect", function() {
    console.log("client disconnected");
    removeClient(client);
  });

  client.on("getConfiguration", () => {
    console.log("getConfiguration");
    client.emit("setConfiguration", configuration);
  });

  client.on("startTimer", () => {
    setInterval(() => {
      if (state.timer <= 0) {
        return;
      }
      state.timer -= 1;

      client.emit("setTimer", state.timer);
    }, 1000);
  });

  client.on("getTimer", () => {
    console.log("getTimer");

    client.emit("setTimer", state.timer);
  });
});

server.listen(SOCKET_PORT);

console.log(chalk`{blue.bold Socket running on port}`, SOCKET_PORT);
console.log(
  chalk`{bold.green Run the game!} {white.bold.underline http://${internalIp.v4.sync()}:${APP_PORT}}`
);
