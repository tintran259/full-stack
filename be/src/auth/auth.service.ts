import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { comparePassword } from '@/helper/utils';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private generateToken: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(username);

      const isValidPassword = await comparePassword(pass, user.password);
      if (!isValidPassword) {
        throw new UnauthorizedException();
      }
      const payload = { email: user.email, sub: user._id };

      return {
        access_token: await this.generateToken.signAsync(payload),
      };
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Invalid username or password',
      });
    }
  }
}
