import { Request, Response } from "express"
import { CreateCategoryUseCase } from "@/domain/usecase/category/CreateCategoryUseCase"
import { TypeormCategoriesRepository } from "@/infra/database/typeorm/repositories/TypeormCategoriesRepository"

export class CreateCategoryController {
  async handler(request: Request, response: Response): Promise<Response> {
    const categoryRequest = request.body
    const createCategoryUseCase = new CreateCategoryUseCase(
      new TypeormCategoriesRepository(),
    )
    const category = await createCategoryUseCase.execute(categoryRequest)
    return response.status(201).json(category)
  }
}
