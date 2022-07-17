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
/* import { isUuidValid } from 'src/utils/validation'; */
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistsService } from './services/artists.service';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.artistsService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    /* isUuidValid(id); */
    return this.artistsService.getById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    /* isUuidValid(id); */
    return this.artistsService.updateById(id, updateArtistDto);
  }

  @HttpCode(204)
  @Delete(':id')
  async removeById(@Param('id', new ParseUUIDPipe()) id: string) {
    /*  isUuidValid(id); */
    return this.artistsService.removeById(id);
  }
}
