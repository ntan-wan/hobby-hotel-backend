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
    const {
      name,
      description,
      rating,
      priceRange,
      page = 1,
      limit = 50,
    } = query ?? {};

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

    // Add pagination
    const skip = (page - 1) * limit;
    qb.offset(skip).limit(limit);

    // Get total count and results
    const [items, total] = await Promise.all([
      qb.getResult(),
      qb.clone().getCount(),
    ]);

    return {
      data: items,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
