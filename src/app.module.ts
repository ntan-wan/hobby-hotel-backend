import { Module } from '@nestjs/common';
import mikroORMConfig from './mikro-orm.config';
import { UsersModule } from './users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AccommodationsModule } from './accommodations/accommodations.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroORMConfig),
    UsersModule,
    AccommodationsModule,
  ],
  //   controllers: [AppController, AccommodationsController],
  //   providers: [AppService, AccommodationsService],
})
export class AppModule {}
