import { Router } from "express";

import { AnswersController } from "./controllers/AnswersController";

const routes = Router();

const answersController = new AnswersController();

routes.post("/answers", answersController.create);
routes.get("/answers", answersController.list);

routes.get("/ping", (_, res) => res.json({ pong: true }));

export { routes };
