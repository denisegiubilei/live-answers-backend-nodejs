import { Request, Response } from "express";

import { AnswerService } from "../services/AnswerService";

class AnswersController {
  async list(request: Request, response: Response): Promise<Response> {
    const answersService = new AnswerService();

    try {
      const answersList = await answersService.list("DESC", 100);

      return response.json(answersList);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { AnswersController };
