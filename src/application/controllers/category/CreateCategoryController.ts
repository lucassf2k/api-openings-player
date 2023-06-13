import { Request, Response } from "express"
import { CategoriesRepository } from "@/domain/repositories/CategoriesRepository"
import { CreateCategoryUseCase } from "@/domain/usecase/category/CreateCategoryUseCase"

export class CreateCategoryController {
  async handler(request: Request, response: Response): Promise<Response> {
    const categoryRequest = request.body
    const createCategoryUseCase = new CreateCategoryUseCase(
      new CategoriesRepository(),
    )
    const category = await createCategoryUseCase.execute(categoryRequest)
    return response.status(201).json(category)
  }
}
