import { Module } from '@nestjs/common';
import { AccommodationsController } from './accommodations.controller';
import { AccommodationsService } from './accommodations.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Accommodation } from 'src/entities/accommodation.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Accommodation])],
  controllers: [AccommodationsController],
  providers: [AccommodationsService],
})
export class AccommodationsModule {}
