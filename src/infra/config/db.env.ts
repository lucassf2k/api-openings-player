export const DB = {
  type: process.env.DB_TYPE || "postgres",
  port: process.env.DB_PORT || 5432,
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "docker",
  password: process.env.DB_PASSWORD || "docker",
  database: process.env.DB_DATABASE || "docker",
}
