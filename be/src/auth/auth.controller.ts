import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { Public } from '@/decorator';
import { CreateAuthDto } from './dto/create-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private mailService: MailerService,
  ) {}

  @Public()
  @Post('login')
  create(@Request() req) {
    return this.authService.signIn(req.body);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('register')
  register(@Body() registerBody: CreateAuthDto) {
    return this.authService.signUp(registerBody);
  }
}
