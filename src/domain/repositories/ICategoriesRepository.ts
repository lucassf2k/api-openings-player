import { ICreateCategoryDTO } from "@/application/dtos/ICreateCategory"
import { Category } from "@/domain/entities/Category"

export interface ICategoriesRepository {
  save(category: ICreateCategoryDTO): Promise<Category>
  findByName(name: string): Promise<Category | null>
  findAll(): Promise<Category[]>
  findById(id: string): Promise<Category | null>
  update(category: Category): Promise<Category>
}
