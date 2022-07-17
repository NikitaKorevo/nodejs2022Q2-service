import { Injectable } from '@nestjs/common';
import { Database } from 'src/data/database';
import { excludeProperties } from 'src/utils/excludeProperty';
import { generateUuid } from 'src/utils/generateUuid';
import { isEntityByIdExist } from 'src/utils/validation';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private database: Database) {}

  async getAll() {
    const users = this.database.users;

    const validatedUsers = users.map((user) => {
      return excludeProperties(user, 'password');
    });

    return validatedUsers;
  }

  async getById(id: string) {
    const users = this.database.users;
    const user = users.find((user) => user.id === id);

    isEntityByIdExist(user);

    const validatedUsers = excludeProperties(user, 'password');

    return validatedUsers;
  }

  async create(createUserDto: CreateUserDto) {
    const currentTime = new Date().getTime();
    const users = this.database.users;
    const newUser = {
      ...createUserDto,
      id: generateUuid(),
      version: 0,
      createdAt: currentTime,
      updatedAt: currentTime,
    };

    users.push(newUser);

    const validatedUsers = excludeProperties(newUser, 'password');

    return validatedUsers;
  }

  async updateById(id: string, updateUserDto: UpdateUserDto) {
    const currentTime = new Date().getTime();
    const users = this.database.users;
    const userIndex = users.findIndex((user) => {
      return user.id === id;
    });

    isEntityByIdExist(userIndex);

    const user = users[userIndex];
    const updatedUser = {
      ...user,
      ...updateUserDto,
      updatedAt: currentTime,
    };

    const validatedUsers = excludeProperties(updatedUser, 'password');

    users[userIndex] = updatedUser;
    return validatedUsers;
  }

  async removeById(id: string) {
    const users = this.database.users;
    const userIndex = users.findIndex((user) => {
      return user.id === id;
    });

    isEntityByIdExist(userIndex);

    users.splice(userIndex, 1);
    return [];
  }
}
