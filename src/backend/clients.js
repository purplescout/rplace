import {without} from "lodash";

let clients = [];

export function addClient(client) {
  clients = [...clients, client];
  console.log(`clients connected, total:`, clients.length);
}

export function removeClient(client) {
  clients = without(clients, client);
  console.log(`client disconnected, total:`, clients.length);
}

export function emitClients(message, ...args) {
  console.log(`emitting "${message}" to ${clients.length} clients`);
  clients.forEach((client) => client.emit(message, ...args));
}
