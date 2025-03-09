import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Accommodation } from 'src/entities/accommodation.entity';

@Injectable()
export class AccommodationsService {
  constructor(
    @InjectRepository(Accommodation)
    private readonly accommodationRepo: EntityRepository<Accommodation>,
  ) {}

  async findAll() {
    return this.accommodationRepo.findAll();
  }
  //   constructor(
  //     private readonly orm: MikroORM,
  //     private readonly em: EntityManager,
  //   ) {}

  //   async findAll() {
  //     return this.em.find(Accommodation, {});
  //   }
}
