import Drink from 'App/Models/Drink'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Drink, ({ faker }) => {
  return {
    name: faker.lorem.words(2),
    details: faker.lorem.sentence(),
    image: faker.image.url(),
  }
}).build()
