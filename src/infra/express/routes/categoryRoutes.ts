import { CreateCategoryController } from "@/application/controllers/category/CreateCategoryController"
import { ListCategoriesController } from "@/application/controllers/category/ListCategoriesController"
import { Router } from "express"
const categoryRoutes = Router()
const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
categoryRoutes.post("/", createCategoryController.handler)
categoryRoutes.get("/", listCategoriesController.handler)
export { categoryRoutes }
