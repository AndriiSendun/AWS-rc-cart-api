import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Order extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  userId!: string;

  @Column
  cartId!: string;

  @Column
  paymentType!: string;

  @Column
  paymentAddress?: string;

  @Column
  paymentCreditCard?: string;

  @Column
  deliveryType!: string;

  @Column
  deliveryAddress!: string;

  @Column
  comments!: string;

  @Column
  status!: string;

  @Column
  total!: number;
}