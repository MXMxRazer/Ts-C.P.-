import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { UsersDTo } from '../DTO/UsersDTO';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) public readonly user: Repository<User>) {}

  async insert(userDetails: UsersDTo): Promise<User> {
    const user: User = this.user.create();
    const { firstName, lastName, email, password, year, month, day, gender } =
      userDetails;
    user.first_name = firstName;
    user.last_name = lastName;
    user.email = email;
    user.password = password;
    user.year = year;
    user.month = month;
    user.day = day;
    user.gender = gender;
    await this.user.save(user);

    return user;
  }

  findAll(): Promise<User[]> {
    return this.user.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.user.findOneBy({
      id: id,
    });
  }

  async updateById(id: string, userDetails: UsersDTo): Promise<any> {
    return this.user
      .createQueryBuilder()
      .update()
      .set({
        first_name: userDetails.firstName,
      })
      .where('id = :id', { id })
      .execute();
  }

  async getUserByEmail(mail: string): Promise<User> {
    return await this.user.findOneBy({
      email: mail,
    });
  }

  getMyHomePageThroughEmail(mail: string) {
    console.log(`API connected in this URL!`);
    return {
      status: 200,
      response: 'recieved',
      identification: mail,
    };
  }
}
