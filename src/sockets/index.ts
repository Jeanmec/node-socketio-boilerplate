// index.ts
import { Server, Socket } from "socket.io";
const socketio = require("socket.io");

import initializeMessageSocket from "./message";

export function initializeSockets(server: Server) {
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

  initializeMessageSocket(io);
}
