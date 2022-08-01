import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Track {
  @IsString()
  @IsNotEmpty()
  id: string; // uuid v4

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  artistId: string | null;

  @IsString()
  albumId: string | null;

  @IsNumber()
  @IsNotEmpty()
  duration: number;
}
