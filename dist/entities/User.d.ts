import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    year: number;
    month: string;
    day: number;
    gender: string;
}
