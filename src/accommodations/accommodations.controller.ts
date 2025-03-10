import { Controller, Get, Post, Body, Version } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';
import { SearchAccommodationDto } from './dto/search-accommodation.dto';
// import { Accommodation } from 'src/entities/accommodation.entity';
@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Get()
  findAll() {
    return this.accommodationsService.findAll();
  }

  @Version('1')
  @Post('search')
  search(@Body() query: SearchAccommodationDto) {
    //   search(@Body() query: Partial<Accommodation>) {
    return this.accommodationsService.search(query);
  }
}
