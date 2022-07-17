import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './module/artists/artists.module';
import { AlbumsModule } from './module/albums/albums.module';
import { TracksModule } from './module/tracks/tracks.module';
import { UsersModule } from './module/users/users.module';
import { FavoritesModule } from './module/favorites/favorites.module';

@Module({
  imports: [
    ArtistsModule,
    AlbumsModule,
    TracksModule,
    UsersModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
