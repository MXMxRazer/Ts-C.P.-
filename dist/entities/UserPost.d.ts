import { BaseEntity } from "typeorm";
export declare class UserPost extends BaseEntity {
    PostId: string;
    PostImage: string;
    Like: number;
}
