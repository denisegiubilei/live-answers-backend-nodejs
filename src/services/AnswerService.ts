import { getCustomRepository, Repository } from "typeorm";

import { AnswersRepository } from "../repositories/AnswersRepository";
import { Answer } from "../entity/Answer";

interface AnswerData {
  text: string;
}

class AnswerService {
  private answersRepository: Repository<Answer>;

  constructor() {
    this.answersRepository = getCustomRepository(AnswersRepository);
  }

  async create({ text }: AnswerData) {
    const answer = this.answersRepository.create({ text });

    await this.answersRepository.save(answer);

    return answer;
  }

  async list(limit?: number) {
    const answer = this.answersRepository
      .createQueryBuilder("answers")
      .limit(limit || 100);

    return answer;
  }
}

export { AnswerService };
