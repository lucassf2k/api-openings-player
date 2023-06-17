import { CreateCategoryController } from "@/application/controllers/category/CreateCategoryController"
import { ListCategoriesController } from "@/application/controllers/category/ListCategoriesController"
import { UpdateCategoryController } from "@/application/controllers/category/UpdateCategoryController"
import { Router } from "express"
const categoryRoutes = Router()
const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const updateCategoryController = new UpdateCategoryController()
categoryRoutes.post("/", createCategoryController.handler)
categoryRoutes.get("/", listCategoriesController.handler)
categoryRoutes.put("/", updateCategoryController.handler)
export { categoryRoutes }
