import { DataSource } from "typeorm"

export const postgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "openings",
  password: "@openings",
  database: "openingsdb",
  entities: ["src/domain/entities/*.ts"],
  migrations: ["src/infra/database/typeorm/migrations/*.ts"],
})
