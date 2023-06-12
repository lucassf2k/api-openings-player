import { DataSource } from "typeorm"

export const postgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "openings",
  password: "@openings",
  database: "openingsdb",
  entities: [],
  migrations: [],
})
