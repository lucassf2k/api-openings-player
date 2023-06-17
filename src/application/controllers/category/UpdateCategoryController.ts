import { UpdateCategoryDTO } from "@/application/dtos/UpdateCategoryDTO"
import { UpdateCategoryUseCase } from "@/domain/usecase/category/UpdateCategoryUseCase"
import { typeormCategoriesRepository } from "@/infra/database/typeorm/repositories/TypeormCategoriesRepository"
import { Request, Response } from "express"

export class UpdateCategoryController {
  async handler(request: Request, response: Response): Promise<Response> {
    const updateCategory = request.body as UpdateCategoryDTO
    const updateCategoryUseCase = new UpdateCategoryUseCase(
      typeormCategoriesRepository,
    )
    const updatedCategory = await updateCategoryUseCase.execute(updateCategory)
    return response.json(updatedCategory)
  }
}
