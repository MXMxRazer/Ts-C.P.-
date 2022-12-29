import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'postgres', 
    password: undefined, 
    database: 'test', 
    entities: [User], 
    synchronize: true
  }), 
  MulterModule.register({
    dest: './uploads', 
  }),
  UsersModule,
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
