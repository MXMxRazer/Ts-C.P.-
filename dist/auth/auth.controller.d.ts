import { AuthService } from "./auth.service";
import { Dto } from "./dto/authDTO";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(dto: Dto): string;
    signUp(): void;
    logIn(): void;
}
