import openSocket from "socket.io-client";

const socket = openSocket(`http://${window.location.hostname}:8000`);

export default socket;
