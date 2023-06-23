import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from 'src/application/auth/auth.service'
import {
  AuthBodyCreate,
  AuthBodyLogin,
} from 'src/infrastructure/dtos/auth-body'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: AuthBodyCreate): Promise<void> {
    return this.authService.create(body)
  }

  @Post('login')
  async login(@Body() body: AuthBodyLogin): Promise<{ token: string }> {
    return this.authService.login(body)
  }
}
