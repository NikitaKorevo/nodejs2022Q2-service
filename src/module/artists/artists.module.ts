import { Module } from '@nestjs/common';
import { Database } from 'src/data/database';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './services/artists.service';

@Module({
  providers: [ArtistsService, Database],
  controllers: [ArtistsController],
})
export class ArtistsModule {}
