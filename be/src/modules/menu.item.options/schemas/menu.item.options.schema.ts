import { MenuItem } from '@/modules/menu.items/schemas/menu.item.schema';
import { Restaurant } from '@/modules/restaurants/schemas/restaurant.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MenuItemOptionDocument = HydratedDocument<MenuItemOption>;

@Schema({ timestamps: true })
export class MenuItemOption {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MenuItem.name })
  menuItem: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  additionalPrice: number;

  @Prop()
  optionalDescription: string;
}

export const MenuItemOptionSchema =
  SchemaFactory.createForClass(MenuItemOption);
