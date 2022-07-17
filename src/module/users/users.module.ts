import { Module } from '@nestjs/common';
import { Database } from 'src/data/database';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, Database],
  controllers: [UsersController],
})
export class UsersModule {}
