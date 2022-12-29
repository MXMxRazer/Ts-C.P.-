import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { UsersDTo } from '../DTO/UsersDTO';
export declare class UserService {
    readonly user: Repository<User>;
    constructor(user: Repository<User>);
    insert(userDetails: UsersDTo): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    updateById(id: string, userDetails: UsersDTo): Promise<any>;
    getUserByEmail(mail: string): Promise<User>;
    getMyHomePageThroughEmail(mail: string): {
        status: number;
        response: string;
        identification: string;
    };
}
