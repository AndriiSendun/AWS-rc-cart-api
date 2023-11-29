import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from '.';
import { OrderService } from './services';

@Module({
  imports: [ SequelizeModule.forFeature([Order]) ],
  providers: [ OrderService ],
  exports: [ OrderService ]
})
export class OrderModule {}
