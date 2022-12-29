import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UsersDTo } from '../DTO/UsersDTO';
import { UserService } from '../services/Service';

@Controller('backend')
export class UserController {
  constructor(public userservice: UserService) {}

  @Get(`/display/`)
  public getUsers() {
    return this.userservice.findAll();
  }

  @Post('/inputs/')
  public setUsers(@Body() user: UsersDTo) {
    return this.userservice.insert(user);
  }

  @Get(`/display/:id`)
  public async getSpecificUser(@Param('id') id: string) {
    return await this.userservice.findOne(id);
  }

  @Get(`/display/email/:mail`)
  public async getSpecificUserThroughEmail(@Param('mail') mail: string) {
    return await this.userservice.getUserByEmail(mail);
  }

  @Put(`redefine/:id`)
  public async updateUser(@Param('id') id: string, @Body() user: UsersDTo) {
    return await this.userservice.updateById(id, user);
  }

  @Get(`/:mail/Home`)
  public async getMyHomePage(@Param('mail') mail: string) {
    return this.userservice.getMyHomePageThroughEmail(mail);
  }
}
