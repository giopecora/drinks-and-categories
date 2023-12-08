import Drink from 'App/Models/Drink';

export default class DrinksRepository {
    public async getAll(): Promise<Drink[]> {
        return Drink.query().preload('category').exec();
    }
}
