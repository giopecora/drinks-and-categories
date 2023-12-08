import { inject } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CategoryService from "App/Services/CategoryService";

@inject()
export default class CategoriesController {

    constructor(private service: CategoryService) {}

    public async index({ response }: HttpContextContract) {
        try {
            const categories = await this.service.getAllCategories()
            return response.json(categories)
        } catch (error) {
            console.error('Error fetching categories:', error)
            return response.status(500).json({ error: 'Internal Server Error' })
        }
    }
}
