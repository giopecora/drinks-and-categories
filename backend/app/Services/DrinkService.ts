import { inject } from '@adonisjs/core/build/standalone'
import DrinksRepository from 'App/Repositories/DrinksRepository'

@inject()
export default class DrinkService {
  constructor(private drinkRepository: DrinksRepository) {}

  public async getAllDrinks() {
    return this.drinkRepository.getAll()
  }

}
