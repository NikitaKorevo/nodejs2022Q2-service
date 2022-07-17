import { Injectable } from '@nestjs/common';
import { Artist } from 'src/module/artists/schemas/artist.schema';

@Injectable()
export class Database {
  artists: Array<Artist> = [
    {
      id: 'a8536a2e-5566-4ab9-8414-e84fec7a0f6e',
      name: 'Misha',
      grammy: false,
    },
    {
      id: '25720fea-68a2-420f-8560-642c56d459d4',
      name: 'Grisha',
      grammy: false,
    },
  ];
}
