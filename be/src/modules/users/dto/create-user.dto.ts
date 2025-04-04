import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({})
  password: string;
  phone: string;
  address: string;
  image: string;

  @IsOptional()
  codeId?: string;
  codeExpired?: Date;
  isActive?: boolean;
}
