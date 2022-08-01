import { Module } from '@nestjs/common';
import { Database } from 'src/data/database';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './services/albums.service';

@Module({
  providers: [AlbumsService, Database],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
