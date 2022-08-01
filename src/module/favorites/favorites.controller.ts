import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { FavoritesService } from './services/favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.favoritesService.getAll();
  }

  /* @Post('artist/:id')
  @HttpCode(HttpStatus.CREATED)
  addArtist(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.favoritesService.addArtist(id);
  } */

  /* @Post('album/:id')
  @HttpCode(HttpStatus.CREATED)
  addAlbum(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.favoritesService.addAlbum(id);
  } */

  /* @Delete('album/:id')
  @HttpCode(204)
  removeAlbumById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.favoritesService.removeAlbumById(id);
  } */
}
