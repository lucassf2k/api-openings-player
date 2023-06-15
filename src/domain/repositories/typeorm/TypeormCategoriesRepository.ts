import { Repository } from "typeorm"
import { Category } from "@/domain/entities/Category"
import { postgresDataSource } from "@/infra/database/typeorm/app-data-source"
import { ICreateCategoryDTO } from "@/application/dtos/ICreateCategory"

export class TypeormCategoriesRepository {
  private categoriesRepository: Repository<Category>

  constructor() {
    this.categoriesRepository = postgresDataSource.getRepository(Category)
  }

  async save(category: ICreateCategoryDTO): Promise<Category> {
    const newCategory = new Category()
    newCategory.name = category.name
    return await this.categoriesRepository.save(newCategory)
  }

  async findByName(name: string): Promise<Category | null> {
    return await this.categoriesRepository.findOne({
      where: {
        name,
      },
    })
  }

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.find()
  }
}
