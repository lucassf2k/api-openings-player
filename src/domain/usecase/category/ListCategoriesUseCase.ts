import { Category } from "@/domain/entities/Category"
import { ICategoriesRepository } from "@/domain/repositories/interfaces/ICategoriesRepository"

export class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.findAll()
  }
}
