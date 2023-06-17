import { Request, Response } from "express"
import { CreateCategoryUseCase } from "@/domain/usecase/category/CreateCategoryUseCase"
import { typeormCategoriesRepository } from "@/infra/database/typeorm/repositories/TypeormCategoriesRepository"
import { ICreateCategoryDTO } from "@/application/dtos/ICreateCategory"

export class CreateCategoryController {
  async handler(request: Request, response: Response): Promise<Response> {
    const categoryRequest = request.body as ICreateCategoryDTO
    const createCategoryUseCase = new CreateCategoryUseCase(
      typeormCategoriesRepository,
    )
    const category = await createCategoryUseCase.execute(categoryRequest)
    return response.status(201).json(category)
  }
}
