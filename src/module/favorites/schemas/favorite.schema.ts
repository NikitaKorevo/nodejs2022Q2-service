import { IsArray } from 'class-validator';

export class Favorite {
  @IsArray()
  artists: Array<string>;

  @IsArray()
  albums: Array<string>;

  @IsArray()
  tracks: Array<string>;
}
