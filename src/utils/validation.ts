import { errors } from 'src/constants/errors';

export const isEntityByIdExist = (entityIndex) => {
  if (entityIndex === undefined || entityIndex === -1) {
    throw errors.ID_NOT_EXIST;
  } else {
    return true;
  }
};
