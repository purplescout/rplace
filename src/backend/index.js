import io from "socket.io";

import {getBoard, updateCell} from "./board";
import {addClient, removeClient, emitClients} from "./clients";

const server = io();
const PORT = 8000;

const state = init();

console.log(`*** 1`, 1);
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
    console.log("client clicked cell", cell);
    state.board = updateCell(state.board, cell);

    emitClients("setBoard", state.board);
  });
  client.on("disconnect", function() {
    console.log("client disconnected");
    removeClient(client);
  });
});

server.listen(PORT);

console.log("listening on port", PORT);
