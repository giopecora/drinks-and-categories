import { inject } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryService from "App/Services/CategoryService";
import DrinkService from 'App/Services/DrinkService';

@inject()
export default class DrinksController {

    constructor(private categoryService: CategoryService, private drinkService: DrinkService) {}

    public async index(ctx: HttpContextContract) {
        try {
            if (ctx.request.input('categoryId')) {
                var drinks = await this.categoryService.getDrinks(ctx.request.input('categoryId'))
            } else {
                var drinks = await this.drinkService.getAllDrinks()
            }
            return ctx.response.json(drinks)
        } catch (error) {
            console.error('Error fetching drinks:', error)
            return ctx.response.status(500).json({ error: 'Internal Server Error' })
        }
    }
}
