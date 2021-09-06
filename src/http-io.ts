import express from "express";

import { createServer } from "http";
import { Server } from "socket.io";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export { http, io };
