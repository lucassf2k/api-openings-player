import { UpdateCategoryDTO } from "@/application/dtos/UpdateCategoryDTO"
import { Category } from "@/domain/entities/Category"
import { ICategoriesRepository } from "@/domain/repositories/ICategoriesRepository"
import { AppError } from "@/infra/errors/AppError"

export class UpdateCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async execute(category: UpdateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findById(
      category.id,
    )
    if (!categoryAlreadyExists) throw new AppError("Category not exists.")
    categoryAlreadyExists.name = category.name
    return await this.categoriesRepository.update(categoryAlreadyExists)
  }
}
