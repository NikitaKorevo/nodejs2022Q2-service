import { HttpException, HttpStatus } from '@nestjs/common';

export const errors = {
  ID_INVALID: new HttpException('Id is invalid', HttpStatus.BAD_REQUEST),
  ID_NOT_EXIST: new HttpException("Id doesn't exist", HttpStatus.NOT_FOUND),
};
