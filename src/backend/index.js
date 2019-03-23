import io from "socket.io";

import {getBoard, updateCell} from "./board";
import {addClient, removeClient, emitClients} from "./clients";

const server = io();
const PORT = 8000;

const LAST_CELL_CLICK = "LAST_CELL_CLICK";

const configuration = {
  coolDown: 5 * 1000,
};

const state = init();

function init() {
  return {
    board: getBoard(),
  };
}

server.on("connection", (client) => {
  addClient(client);

  client.on("getBoard", () => {
    console.log("getBoard");
    client.emit("setBoard", state.board);
  });
  client.on("clickCell", (cell) => {
    if (client[LAST_CELL_CLICK]) {
      const allowedAgain =
        client[LAST_CELL_CLICK].getTime() + configuration.coolDown;
      const now = new Date().getTime();
      const waitTime = allowedAgain - now;
      if (waitTime > 0) {
        console.log("client clicked cell within cool down, ignoring");
        client.emit("toast", {
          content: "Cool down, bro",
          options: {
            type: "info",
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
  });
  client.on("disconnect", function() {
    console.log("client disconnected");
    removeClient(client);
  });

  client.on("getConfiguration", () => {
    console.log("getConfiguration");
    client.emit("setConfiguration", configuration);
  });
});

server.listen(PORT);

console.log("listening on port", PORT);
