import { CategoriesRepository } from "@/domain/repositories/CategoriesRepository"
import { ListCategoriesUseCase } from "@/domain/usecase/category/ListCategoriesUseCase"
import { Request, Response } from "express"

export class ListCategoriesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = new ListCategoriesUseCase(
      new CategoriesRepository(),
    )
    const categories = await listCategoriesUseCase.execute()
    return response.json(categories)
  }
}
