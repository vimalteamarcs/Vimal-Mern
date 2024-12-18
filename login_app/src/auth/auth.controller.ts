import { Body, Controller, Get, Post, Query, Logger, Param, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signupUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import { plainToClass } from 'class-transformer';
import { ApiResponse } from 'src/common/response.helper';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);
    constructor(private authsevice: AuthService) { }

    @Post('signup')
    async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
        try {

            return this.authsevice.signUp(signUpDto);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
        try {
            return this.authsevice.login(loginDto);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

    @Get('getotp/:id')
    async getotp(@Param('id') id
    ): Promise<any> {

        return this.authsevice.getotp(id);
    }

    @Get('getAllRoles')
    async GetAllRoles(): Promise<any> {
        return this.authsevice.getAllRoles();
    }

    @Post('checkotp')
    async CheckUserOtp(@Body() body: { userid: string; otp: string }): Promise<any> {
        const { userid, otp } = body;
        if (!userid || !otp) {
            return new ApiResponse(
                                HttpStatus.NOT_FOUND,
                                'failed',
                                "User or OTP Required",
                                [{ userid,otp }]
                            );
        }
        return this.authsevice.CheckUserOtp(userid, otp);
    }

}
