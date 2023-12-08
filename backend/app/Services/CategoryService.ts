import { inject } from '@adonisjs/core/build/standalone'
import CategoryRepository from 'App/Repositories/CategoryRepository'

@inject()
export default class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  public async getAllCategories() {
    return this.categoryRepository.getAll()
  }

  public async getDrinks(categoryId: number) {
    return this.categoryRepository.getDrinks(categoryId)
  }
}
