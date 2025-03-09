import { Controller, Get } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';

@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Get()
  findAll() {
    return this.accommodationsService.findAll();
  }
}
