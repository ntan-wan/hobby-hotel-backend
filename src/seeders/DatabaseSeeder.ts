import { Seeder } from '@mikro-orm/seeder';
import type { EntityManager } from '@mikro-orm/core';
import { UserFactory } from '../factories/user.factory';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const userFactory = new UserFactory(em);
    await userFactory.create(10);
  }
}
