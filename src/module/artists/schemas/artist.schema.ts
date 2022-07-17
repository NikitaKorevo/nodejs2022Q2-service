import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class Artist {
  @IsString()
  @IsNotEmpty()
  id: string; // uuid v4

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  grammy: boolean;
}
