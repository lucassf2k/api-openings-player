import express from "express"
import { routes } from "@/application/routes"

function application(): void {
  const app = express()
  app.use(express.json())
  app.use(routes)
  app.listen(3001, () =>
    console.log("Server is started on http://localhost:3001"),
  )
}
application()
