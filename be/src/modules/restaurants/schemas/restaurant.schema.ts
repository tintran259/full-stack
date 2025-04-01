import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  email: string;

  @Prop()
  rating: number;
}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
