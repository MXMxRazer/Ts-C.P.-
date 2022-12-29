import { Dto } from './dto/authDTO';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwt;
    constructor(jwt: JwtService);
    sign_in(auth_dto: Dto): string;
    jwtProcessing(email: string, password: string): string;
}
