import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ConfigService } from './config.service';
import { HotelsController } from './hotels/hotels.controller';
import { HotelsService } from './hotels/hotels.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, HotelsController],
  providers: [AppService, UsersService, HotelsService, ConfigService],
  exports: [ConfigService],
})
export class AppModule {}
