import { EntityRepository, Repository } from "typeorm";

import { Answer } from "../entity/Answer";

@EntityRepository(Answer)
class AnswersRepository extends Repository<Answer> {}

export { AnswersRepository };
