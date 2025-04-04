import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  phone: string;
  address: string;
  image: string;
}
