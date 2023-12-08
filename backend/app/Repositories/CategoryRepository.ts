import Category from 'App/Models/Category'

export default class CategoryRepository {
    public async getAll(): Promise<Category[]> {
        return Category.all()
    }

    public async getDrinks(categoryId: number) {
        const category = await Category.find(categoryId)
        
        if (category) {
            const drinks = category.related('drinks').query().preload('category').exec()
            return drinks;
        }

        return []
    }
}
