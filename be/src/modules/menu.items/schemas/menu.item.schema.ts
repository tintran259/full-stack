import { Menu } from '@/modules/menus/schemas/menu.schema';
import { SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class MenuItem {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Menu.name })
  menu: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  basPrice: number;

  @Prop()
  image: string;
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
