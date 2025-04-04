import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { comparePassword, hashPassword } from '@/helper/utils';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private generateToken: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(username);
      const isValidPassword = await comparePassword(pass, user.password);

      if (!isValidPassword || !user) return null;

      return user;
    } catch (error) {
      console.log('error:', error);

      throw new UnauthorizedException({
        message: 'Invalid username or password',
      });
    }
  }

  async signIn(user: any): Promise<any> {
    try {
      const payload = { email: user.username, sub: user._id };

      return {
        access_token: await this.generateToken.signAsync(payload),
      };
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Invalid username or password',
      });
    }
  }

  async signUp(registerBody: CreateAuthDto): Promise<any> {
    try {
      const isExist = await this.usersService.isEmailExist(registerBody.email);
      if (isExist) {
        throw new UnauthorizedException({
          message: 'Email already exist',
        });
      }

      const password = await hashPassword(registerBody.password);

      const newUser = await this.usersService.create({
        ...registerBody,
        password,
        codeId: uuid(),
        codeExpired: dayjs().add(1, 'day').toDate(),
        isActive: false,
      });

      console.log('newUser', newUser);

      return {
        // access_token: await this.generateToken.signAsync({
        //   email: newUser.,
        //   sub: newUser._id,
        // }),
        message: 'create user successfully',
      };
    } catch (error) {
      throw new UnauthorizedException({
        message: error.message,
      });
    }
  }
}
