import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Album {
  @IsString()
  @IsNotEmpty()
  id: string; // uuid v4

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  artistId: string | null;
}
