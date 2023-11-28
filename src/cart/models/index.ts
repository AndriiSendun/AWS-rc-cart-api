import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo
} from 'sequelize-typescript';

export enum CartStatusEnum {
  OPEN,
  ORDERED
}

@Table
export class Product extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  title!: string;

  @Column
  description!: string;

  @Column
  price!: number;
}

@Table
export class CartItem extends Model {
  @ForeignKey(() => Product)
  @Column
  cart_id!: string;

  @Column
  product_id!: string;

  @Column
  count!: number;

  @BelongsTo(() => Product)
  product: Product
}

@Table
export class Cart extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  user_id: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @Column
  status: CartStatusEnum

  @Column
  items: CartItem[]
}
