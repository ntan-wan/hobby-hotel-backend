import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mikroORMConfig from './mikro-orm.config';
import { UsersModule } from './users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AccommodationsModule } from './accommodations/accommodations.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroORMConfig),
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    UsersModule,
    AccommodationsModule,
  ],
  //   controllers: [AppController, AccommodationsController],
  //   providers: [AppService, AccommodationsService],
})
export class AppModule {}
