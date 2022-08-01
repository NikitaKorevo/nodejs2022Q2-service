import { Injectable } from '@nestjs/common';
import { Database } from 'src/data/database';
import { generateUuid } from 'src/utils/generateUuid';
import { isEntityByIdExist } from 'src/utils/validation';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';

@Injectable()
export class AlbumsService {
  constructor(private database: Database) {}

  async getAll() {
    return this.database.albums;
  }

  async getById(id: string) {
    const album = this.database.albums.find((album) => album.id === id);

    isEntityByIdExist(album);

    return album;
  }

  async create(createAlbumDto: CreateAlbumDto) {
    const newAlbum = { artistId: null, ...createAlbumDto, id: generateUuid() };
    this.database.albums.push(newAlbum);

    return newAlbum;
  }

  async updateById(id: string, updateAlbumDto: UpdateAlbumDto) {
    const albums = this.database.albums;
    const albumIndex = albums.findIndex((album) => {
      return album.id === id;
    });

    isEntityByIdExist(albumIndex);

    const album = albums[albumIndex];
    const updatedAlbum = { ...album, ...updateAlbumDto };

    this.database.albums[albumIndex] = updatedAlbum;
    return updatedAlbum;
  }

  async removeById(id: string) {
    const albums = this.database.albums;
    const albumIndex = albums.findIndex((album) => {
      return album.id === id;
    });

    isEntityByIdExist(albumIndex);

    this.database.albums.splice(albumIndex, 1);
    return [];
  }
}
