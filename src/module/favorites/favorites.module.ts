import { Module } from '@nestjs/common';
import { Database } from 'src/data/database';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './services/favorites.service';

@Module({
  providers: [FavoritesService, Database],
  controllers: [FavoritesController],
})
export class FavoritesModule {}
