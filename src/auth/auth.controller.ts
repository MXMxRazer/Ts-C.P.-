import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Dto } from "./dto/authDTO";

@Controller(`auth`)
export class AuthController {

    constructor(private readonly authService: AuthService){
    }

    @Post(`signIn`)
    public signIn(@Body() dto: Dto) {
        return this.authService.sign_in(dto); 
    }

    @Post(`signUp`)
    public signUp() {

    }

    @Post(`logIn`)
    public logIn() {

    }

}