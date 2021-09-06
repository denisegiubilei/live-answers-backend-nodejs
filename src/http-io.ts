import express from "express";

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

app.use(express.json());

app.get("/ping", (_, res) => res.json({ pong: true }));

const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export { http, io };
