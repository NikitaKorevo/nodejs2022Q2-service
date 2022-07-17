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
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumsService } from './services/albums.service';

@Controller('album')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.albumsService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.albumsService.getById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.create(createAlbumDto);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ) {
    return this.albumsService.updateById(id, updateAlbumDto);
  }

  @HttpCode(204)
  @Delete(':id')
  async removeById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.albumsService.removeById(id);
  }
}
