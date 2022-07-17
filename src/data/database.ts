import { Injectable } from '@nestjs/common';
import { Album } from 'src/module/albums/schemas/album.schema';
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
      grammy: true,
    },
  ];
  albums: Array<Album> = [
    {
      id: 'a61452d7-59f5-4967-9446-d88ba53bf5d4',
      name: 'Strong album',
      year: 2000,
      artistId: null,
    },
    {
      id: '20a60dff-1690-49fc-ae48-7e968919b517',
      name: 'Wonderful album',
      year: 2005,
      artistId: 'a8536a2e-5566-4ab9-8414-e84fec7a0f6e',
    },
  ];
}
