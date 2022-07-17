import { errors } from 'src/constants/errors';
import { validate } from 'uuid';

/* export const isUuidValid = (UUID: string) => {
  const isUuidValid = validate(UUID);
  if (isUuidValid) {
    return true;
  } else {
    throw errors.ID_INVALID;
  }
}; */

export const isEntityByIdExist = (entityIndex) => {
  if (entityIndex === undefined || entityIndex === -1) {
    throw errors.ID_NOT_EXIST;
  } else {
    return true;
  }
};
