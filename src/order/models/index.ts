import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { CartItem } from 'src/cart/models';

@Table
export class Order extends Model {
  @Column({ primaryKey: true })
  id!: string;

  @Column
  userId!: string;

  @Column
  cartId!: string;

  @HasMany(() => CartItem)
  items!: CartItem[];

  @Column
  paymentType!: string;

  @Column
  payment_address?: any;

  @Column
  payment_credit_card?: any;

  @Column
  delivery_type!: string;

  @Column
  delivery_address!: any;

  @Column
  comments!: string;

  @Column
  status!: string;

  @Column
  total!: number;
}