import express from "express"
import swaggerUi from "swagger-ui-express"
import { routes } from "@/infra/express/routes"
import { postgresDataSource } from "@/infra/typeorm/database/app-data-source"
import { errorHandler } from "@/infra/express/middlewares/error-handler"
import swaggerFile from "@/infra/config/swagger.json"

function application(): void {
  const app = express()
  app.use(express.json())
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use("/api", routes)
  app.use(errorHandler)
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
