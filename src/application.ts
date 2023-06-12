import express from "express"
import { routes } from "@/infra/express/routes"
import { postgresDataSource } from "@/infra/typeorm/database/app-data-source"
import { errorHandler } from "@/infra/express/middlewares/error-handler"
function application(): void {
  const app = express()
  app.use(express.json())
  app.use(routes)
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
