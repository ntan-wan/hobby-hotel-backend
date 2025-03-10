import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Accommodation } from 'src/entities/accommodation.entity';
import { SearchAccommodationDto } from './dto/search-accommodation.dto';
@Injectable()
export class AccommodationsService {
  constructor(
    @InjectRepository(Accommodation)
    private readonly accommodationRepo: EntityRepository<Accommodation>,
  ) {}

  async findAll() {
    return this.accommodationRepo.findAll();
  }

  async search(query: SearchAccommodationDto) {
    const { name, description, rating, priceRange } = query ?? {};

    const qb = this.accommodationRepo.createQueryBuilder('a');

    if (name) {
      qb.andWhere({ name: { $ilike: `%${name}%` } });
    }
    if (description) {
      qb.andWhere({ description: { $ilike: `%${description}%` } });
    }
    if (rating) {
      qb.andWhere({ rating: { $gte: rating } });
    }
    if (priceRange) {
      qb.andWhere({
        pricePerNight: { $gte: priceRange.min, $lte: priceRange.max },
      });
    }

    return qb.getResult();
  }
}
