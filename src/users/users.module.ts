import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '.';

import { UsersService } from './services';

@Module({
  imports: [ SequelizeModule.forFeature([User]) ],
  providers: [ UsersService ],
  exports: [ UsersService ],
})
export class UsersModule {}
