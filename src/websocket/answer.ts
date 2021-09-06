import { Socket } from "socket.io";
import { io } from "../http-io";

import { AnswerService } from "../services/AnswerService";

io.on("connection", (socket: Socket) => {
  console.log("Socket connected", socket.id);

  socket.on("user_answered", async ({ text }) => {
    const answerService = new AnswerService();

    await answerService.create({ text });

    const anwsersList = await answerService.list("DESC", 100);

    io.emit("update_answers_list", {
      anwsersList,
    });
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
