import { Category } from "@/domain/entities/Category"
import { ICategoriesRepository } from "@/domain/repositories/interfaces/ICategoriesRepository"
import { AppError } from "@/infra/errors/AppError"

interface IRequest {
  name: string
}

export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async execute(request: IRequest): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      request.name,
    )
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!")
    }
    return await this.categoriesRepository.save(request)
  }
}
