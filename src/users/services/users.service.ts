import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';

import { v4 } from 'uuid';

import { User, UserDto } from '../models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly _userModel: typeof User,
  ) {}

  findOne(name: string): Promise<User> {
    return this._userModel.findOne({ where: { name }})
  }

  async createOne({ name, password }: UserDto): Promise<User> {
    const id = v4();

    return this._userModel.create({
      id,
      name: name || id,
      password
    })
  }
}
