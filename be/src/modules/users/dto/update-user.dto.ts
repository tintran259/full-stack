import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsMongoId({ message: 'Invalid user id' })
  @IsNotEmpty({ message: 'User id is required' })
  _id: string;
  name: string;
  phone: string;
  address: string;
  image: string;
}
