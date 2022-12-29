import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "User"
})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string; 

    @Column()
    first_name: string; 

    @Column()
    last_name: string; 

    @Column()
    email: string;
    
    @Column()
    password: string; 
    
    @Column()
    year: number; 

    @Column()
    month: string;

    @Column()
    day: number; 

    @Column()
    gender: string; 
}