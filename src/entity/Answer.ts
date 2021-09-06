import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("answers")
class Answer {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Answer };
