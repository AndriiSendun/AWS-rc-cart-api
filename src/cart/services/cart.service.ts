import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { v4 } from 'uuid';
import { Cart, CartStatusEnum } from '../models';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart)
    private readonly _cartModel: typeof Cart,
  ) {}

  findByUserId(userId: string): Promise<Cart> {
    return this._cartModel.findOne({
      where: { userId }
    });
  }

  createByUserId(userId: string): Promise<Cart> {
    return this._cartModel.create({
      id: v4(),
      userId,
      status: CartStatusEnum.OPEN,
      items: [],
    });;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    const cart = await this.findByUserId(userId);
    const updatedCart = await cart.update({ items });

    return updatedCart;
  }

  async removeByUserId(userId): Promise<void> {
    const cart = await this.findByUserId(userId);

    cart.destroy();
  }
}
