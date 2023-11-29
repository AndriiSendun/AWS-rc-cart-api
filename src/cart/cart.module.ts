import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart, CartItem, Product } from '.';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';


@Module({
  imports: [ OrderModule, SequelizeModule.forFeature([Cart, CartItem, Product]) ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
