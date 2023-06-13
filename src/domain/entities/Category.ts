import { randomUUID } from "node:crypto"
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id?: string

  @Column()
  name?: string

  @CreateDateColumn()
  createdAt?: Date

  constructor() {
    if (this.id) {
      this.id = randomUUID()
    }
  }
}
