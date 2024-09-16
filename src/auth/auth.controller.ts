import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { SignInDto } from 'src/dtos/sign-in-dto/sign-in-dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body(new ValidationPipe()) signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Get('tasks')
  getRoadmap(@Request() req) {
    return {
      "description": "OK",
      "data": [
        {
          "id": "1",
          "idProject": "MAC-12",
          "name": "Marketing",
          "start": "2023-11-12",
          "end": "2023-11-30"
        },
        {
          "id": "2",
          "idProject": "MAC-19",
          "name": "Referral",
          "start": "2023-11-15",
          "end": "2023-12-24"
        },
        {
          "id": "3",
          "idProject": "MAC-24",
          "name": "Blocker",
          "start": "2024-01-05",
          "end": "2024-01-17"
        }
      ]
    };
  }
}
