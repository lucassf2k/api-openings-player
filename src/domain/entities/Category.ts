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
  private id?: string

  @Column()
  name?: string

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
