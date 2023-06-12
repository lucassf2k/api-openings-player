import express from "express"
import { routes } from "@/infra/routes"
import { postgresDataSource } from "@/infra/database/app-data-source"

function application(): void {
  const app = express()
  app.use(express.json())
  app.use(routes)
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
