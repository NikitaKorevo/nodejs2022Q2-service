import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './module/artists/artists.module';

@Module({
  imports: [ArtistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}