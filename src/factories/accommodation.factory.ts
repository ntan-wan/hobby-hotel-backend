import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import { Accommodation } from '../entities/accommodation.entity';

export class AccommodationFactory extends Factory<Accommodation> {
  model = Accommodation;

  definition(): Partial<Accommodation> {
    return {
      name: faker.lorem.words(3),
      location: faker.location.city(),
      description: faker.lorem.paragraph(),
      pricePerNight: faker.number.float({
        min: 50,
        max: 500,
        fractionDigits: 2,
      }),
      isAvailable: faker.datatype.boolean(),
    };
  }
}
