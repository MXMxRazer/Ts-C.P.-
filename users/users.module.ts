import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { UserController } from './controllers/Controller';
import { UserService } from './services/Service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
MulterModule.register({
  dest: 'uploads/userUploads'
})],
  controllers: [UserController],
  providers: [UserService], 
  exports: [UserService]
})
export class UsersModule {}
