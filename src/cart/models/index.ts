import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  HasMany,
  DataType
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
  @Column
  @ForeignKey(() => Cart)
  cartId!: string;

  @ForeignKey(() => Product)
  @Column
  productId!: string;

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
  userId: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column
  status: CartStatusEnum

  @Column(DataType.ARRAY(DataType.JSONB))
  items: CartItem[]
}