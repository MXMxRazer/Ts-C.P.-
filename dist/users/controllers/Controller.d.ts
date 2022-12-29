import { UsersDTo } from '../DTO/UsersDTO';
import { UserService } from '../services/Service';
export declare class UserController {
    userservice: UserService;
    constructor(userservice: UserService);
    getUsers(): Promise<import("../../entities/User").User[]>;
    setUsers(user: UsersDTo): Promise<import("../../entities/User").User>;
    getSpecificUser(id: string): Promise<import("../../entities/User").User>;
    getSpecificUserThroughEmail(mail: string): Promise<import("../../entities/User").User>;
    updateUser(id: string, user: UsersDTo): Promise<any>;
    getMyHomePage(mail: string): Promise<{
        status: number;
        response: string;
        identification: string;
    }>;
}
