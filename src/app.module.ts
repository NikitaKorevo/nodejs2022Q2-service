import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './module/artists/artists.module';
import { AlbumsModule } from './module/albums/albums.module';

@Module({
  imports: [ArtistsModule, AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
