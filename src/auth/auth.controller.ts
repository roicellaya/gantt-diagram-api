import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto } from 'src/dtos/sign-in-dto/sign-in-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}