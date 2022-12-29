import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Dto } from './dto/authDTO';
import { JwtService } from '@nestjs/jwt'; 

@Injectable()
export class AuthService {

    constructor(private readonly jwt: JwtService){

    }

    public sign_in(auth_dto: Dto) {
        if (auth_dto.email == null || auth_dto.password == null) {
            throw new UnauthorizedException(`Credentials not statisfied!`); 
        }

        return this.jwtProcessing(auth_dto.email, auth_dto.password); 

    }

    public jwtProcessing(email: string, password: string) {
        const token = this.jwt.sign({
            payload: {
                email, 
                password
            }, 
            secrect: 'something-secret123'
        })

        return token; 
    }

}
