import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'
import DrinkFactory from 'Database/factories/DrinkFactory';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    const categories = await Category.all();

    for (const category of categories) {
      await DrinkFactory.merge({ category_id: category.id }).createMany(5)
    }
  }
}
