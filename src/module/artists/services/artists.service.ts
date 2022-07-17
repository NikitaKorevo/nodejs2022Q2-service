import { Injectable } from '@nestjs/common';
import { Database } from 'src/data/database';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { generateUuid } from 'src/utils/generateUuid';
import { UpdateArtistDto } from '../dto/update-artist.dto';
import { isEntityByIdExist } from 'src/utils/validation';

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
    const artistIndex = this.database.artists.findIndex((artist) => {
      return artist.id === id;
    });

    isEntityByIdExist(artistIndex);

    const artist = await this.getById(id);
    const updatedArtist = { ...artist, ...updateArtistDto };

    this.database.artists[artistIndex] = updatedArtist;
    return updatedArtist;
  }

  async removeById(id: string) {
    const artistIndex = this.database.artists.findIndex((artist) => {
      return artist.id === id;
    });

    isEntityByIdExist(artistIndex);

    this.database.artists.splice(artistIndex, 1);
    return [];
  }
}
