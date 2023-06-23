import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from 'src/application/auth/auth.service'
import { userProviders } from 'src/infrastructure/typeorm/providers/user.providers'
import { DatabaseModule } from 'src/infrastructure/typeorm/database.module'

@Module({
  controllers: [AuthController],
  imports: [DatabaseModule],
  providers: [...userProviders, AuthService],
})
export class AuthModule {}
