import { Module } from '@nestjs/common'
import { AuthModule } from 'src/interfaces/auth/auth.module'

@Module({
  imports: [AuthModule],
})
export class ConfigModule {}
