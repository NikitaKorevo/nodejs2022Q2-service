import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { errors } from 'src/constants/errors';
import { messages } from 'src/constants/messages';
import { Database } from 'src/data/database';
import { AlbumsService } from 'src/module/albums/services/albums.service';
import { ArtistsService } from 'src/module/artists/services/artists.service';
import { isEntityByIdExist } from 'src/utils/validation';

@Injectable()
export class FavoritesService {
  constructor(
    private database: Database,
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
  ) {}

  async getAll() {
    return this.database.favorites;
  }

  /* async addArtist(id: string) {
    const database = this.database.favorites.artists;

    try {
      const artist = await this.artistsService.getById(id);
    } catch (error) {
      throw new HttpException(
        "Id doesn't exist",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isArtistIdExistInDatabase =
      this.database.favorites.artists.includes(id);

    if (!isArtistIdExistInDatabase) {
      this.database.favorites.artists.push(id);
    }

    throw messages.ID_ADDED_TO_FAVORITES;
  } */

  /* async addAlbum(id: string) {
    const database = this.database.favorites.albums;

    try {
      const album = await this.albumsService.getById(id);
    } catch (error) {
      throw new HttpException(
        "Id doesn't exist",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isAlbumIdExistInDatabase = database.includes(id);

    if (!isAlbumIdExistInDatabase) {
      this.database.favorites.albums.push(id);
    }

    throw messages.ID_ADDED_TO_FAVORITES;
  } */

  /* async removeAlbumById(id: string) {
    await this.albumsService.getById(id);

    const isAlbumIdExistInDatabase =
      this.database.favorites.albums.includes(id);

    if (!isAlbumIdExistInDatabase) {
      throw errors.ID_NOT_EXIST;
    }

    this.database.favorites.albums = this.database.favorites.albums.filter(
      (albumId) => {
        console.log({ albumId });
        console.log({ id });
        return albumId !== id;
      },
    );
  } */
}
