import { Socket } from "socket.io";
import { io } from "../http-io";

import { AnswerService } from "../services/AnswerService";

io.on("connection", (socket: Socket) => {
  console.log("Socket connected", socket.id);

  socket.on("user_answered", async ({ text }) => {
    const answerService = new AnswerService();

    const anwser = await answerService.create({ text });

    console.log(anwser);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
