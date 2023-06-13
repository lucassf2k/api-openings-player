import { Router } from "express"
import { categoryRoutes } from "@/infra/express/routes/categoryRoutes"
const routes = Router()
routes.use("/categories", categoryRoutes)
export { routes }
