import { Socket } from "socket.io";
import { io } from "../http-io";

import { AnswerService } from "../services/AnswerService";
import { isFieldEmpty, isOnBlockedList } from "../utils/validation.utils";

io.on("connection", (socket: Socket) => {
  console.log("Socket connected", socket.id);

  socket.on("user_answered", async ({ text }, callback) => {
    const answerService = new AnswerService();

    if (isFieldEmpty(text)) {
      callback({
        error: "Text must not be empty!"
      })
      return;
    } 
    
    if (isOnBlockedList(text)) {
      callback({
        error: "Please provide a more elaborated answer!"
      })
      return;
    } 

    await answerService.create({ text });

    const answersList = await answerService.list("DESC", 100);

    io.emit("update_answers_list", {
      answersList,
    });
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
