import { Injectable } from '@nestjs/common';
import { Album } from 'src/module/albums/schemas/album.schema';
import { Artist } from 'src/module/artists/schemas/artist.schema';
import { Track } from 'src/module/tracks/schemas/track.schema';
import { User } from 'src/module/users/schemas/user.schema';
import { Favorite } from 'src/module/favorites/schemas/favorite.schema';

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

  tracks: Array<Track> = [
    {
      id: 'd546c4ae-a1ec-4ced-931b-c6b13a83be51',
      name: 'Hello andrey',
      artistId: 'a8536a2e-5566-4ab9-8414-e84fec7a0f6e',
      albumId: null,
      duration: 111,
    },
    {
      id: '42680a7b-050f-46c7-8160-074606d9e166',
      name: 'Run',
      artistId: null,
      albumId: 'a61452d7-59f5-4967-9446-d88ba53bf5d4',
      duration: 160,
    },
  ];

  users: Array<User> = [
    {
      id: '88f3f065-798b-4fbe-81bb-e6d53d7ce042',
      login: 'nikita',
      password: 'nikita1234',
      version: 0,
      createdAt: 1658081449553,
      updatedAt: 1658081449553,
    },
    {
      id: 'da8763d1-4259-4951-92be-eeb659400b9f',
      login: 'maxim',
      password: 'maxim12345',
      version: 0,
      createdAt: 1658081646458,
      updatedAt: 1658081646458,
    },
  ];

  favorites: Favorite = {
    artists: ['a8536a2e-5566-4ab9-8414-e84fec7a0f6e'],
    albums: ['a61452d7-59f5-4967-9446-d88ba53bf5d4'],
    tracks: ['d546c4ae-a1ec-4ced-931b-c6b13a83be51'],
  };
}
