import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'something-secret123', 
      signOptions: {
        expiresIn: '600s'
      }
    })
  ], 
  controllers: [AuthController], 
  providers: [AuthService], 
  exports: [AuthService]
})
export class AuthModule {}
