import { Restaurant } from '@/modules/restaurants/schemas/restaurant.schema';
import { SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class Menu {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name })
  menu: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
