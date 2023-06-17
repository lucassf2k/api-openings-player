import { ListCategoriesUseCase } from "@/domain/usecase/category/ListCategoriesUseCase"
import { typeormCategoriesRepository } from "@/infra/database/typeorm/repositories/TypeormCategoriesRepository"
import { Request, Response } from "express"

export class ListCategoriesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = new ListCategoriesUseCase(
      typeormCategoriesRepository,
    )
    const categories = await listCategoriesUseCase.execute()
    return response.json(categories)
  }
}
