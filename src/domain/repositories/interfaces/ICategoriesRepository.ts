import { ICreateCategoryDTO } from "@/application/dtos/ICreateCategory"
import { Category } from "@/domain/entities/Category"

export interface ICategoriesRepository {
  save(category: ICreateCategoryDTO): Promise<Category>
  findByName(name: string): Promise<Category | null>
}
