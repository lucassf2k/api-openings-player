import "reflect-metadata"
import "express-async-errors"
import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerFile from "@/infra/config/swagger.json"
import { postgresDataSource } from "./infra/database/typeorm/app-data-source"

function application(): void {
  const app = express()
  app.use(express.json())
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
  postgresDataSource
    .initialize()
    .then(() => {
      app.listen(3001, () =>
        console.log("Server is running on http://localhost:3001"),
      )
    })
    .catch(() => console.log(`Connection failed!`))
}
application()
