import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class User {
  @IsString()
  @IsNotEmpty()
  id: string; // uuid v4

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  version: number;

  @IsNumber()
  @IsNotEmpty()
  createdAt: number;

  @IsNumber()
  @IsNotEmpty()
  updatedAt: number;
}
