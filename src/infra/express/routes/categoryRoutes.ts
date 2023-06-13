import { CreateCategoryController } from "@/application/controllers/category/CreateCategoryController"
import { Router } from "express"
const categoryRoutes = Router()
const createCategoryController = new CreateCategoryController()
categoryRoutes.post("/", createCategoryController.handler)
export { categoryRoutes }
