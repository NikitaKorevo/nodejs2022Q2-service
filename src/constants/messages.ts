import { HttpException, HttpStatus } from '@nestjs/common';

export const messages = {
  ID_ADDED_TO_FAVORITES: new HttpException(
    'Id added to favorites list',
    HttpStatus.CREATED,
  ),
  ID_DELETED: new HttpException('Id deleted from favorites list', 204),
};
