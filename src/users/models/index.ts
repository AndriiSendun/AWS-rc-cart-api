
import {
  Table,
  Column,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';

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
