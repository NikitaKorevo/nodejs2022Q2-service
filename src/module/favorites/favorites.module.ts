import { Module } from '@nestjs/common';
import { Database } from 'src/data/database';
import { AlbumsService } from '../albums/services/albums.service';
import { ArtistsService } from '../artists/services/artists.service';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './services/favorites.service';

@Module({
  providers: [FavoritesService, ArtistsService, AlbumsService, Database],
  controllers: [FavoritesController],
})
export class FavoritesModule {}
