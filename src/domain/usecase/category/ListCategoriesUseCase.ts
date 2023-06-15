import { Category } from "@/domain/entities/Category"
import { ICategoriesRepository } from "@/domain/repositories/ICategoriesRepository"

export class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.findAll()
  }
}
