import { Injectable } from '@nestjs/common';
import { Database } from 'src/data/database';
import { generateUuid } from 'src/utils/generateUuid';
import { isEntityByIdExist } from 'src/utils/validation';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(private database: Database) {}

  async getAll() {
    return this.database.artists;
  }

  async getById(id: string) {
    const artist = this.database.artists.find((artist) => artist.id === id);

    isEntityByIdExist(artist);

    return artist;
  }

  async create(createArtistDto: CreateArtistDto) {
    const newArtist = { ...createArtistDto, id: generateUuid() };
    this.database.artists.push(newArtist);

    return newArtist;
  }

  async updateById(id: string, updateArtistDto: UpdateArtistDto) {
    const artists = this.database.artists;
    const artistIndex = artists.findIndex((artist) => {
      return artist.id === id;
    });

    isEntityByIdExist(artistIndex);

    const artist = artists[artistIndex];
    const updatedArtist = { ...artist, ...updateArtistDto };

    this.database.artists[artistIndex] = updatedArtist;
    return updatedArtist;
  }

  async removeById(id: string) {
    const artists = this.database.artists;
    const artistIndex = artists.findIndex((artist) => {
      return artist.id === id;
    });

    isEntityByIdExist(artistIndex);

    this.database.artists.splice(artistIndex, 1);
    return [];
  }
}
