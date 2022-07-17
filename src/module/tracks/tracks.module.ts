import { Module } from '@nestjs/common';
import { Database } from 'src/data/database';
import { TracksController } from './tracks.controller';
import { TracksService } from './services/tracks.service';

@Module({
  providers: [TracksService, Database],
  controllers: [TracksController],
})
export class TracksModule {}
