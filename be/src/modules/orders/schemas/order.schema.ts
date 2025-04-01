import { Restaurant } from '@/modules/restaurants/schemas/restaurant.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name })
  restaurant: mongoose.Schema.Types.ObjectId;

  @Prop()
  totalPrice: number;

  @Prop()
  status: string;

  @Prop()
  orderTime: Date;

  @Prop()
  deliveryTime: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
