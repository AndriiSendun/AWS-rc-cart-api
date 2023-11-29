
import {
  Table,
  Column,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';

export interface UserDto {
  name: string;
  password: string;
}

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id?: string;

  @Column
  name: string;

  @Column
  email?: string;

  @Column
  password?: string;
}
