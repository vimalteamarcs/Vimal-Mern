import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/auth.schema';
import { AllRoles } from './schemas/auth_getallroles.schema'
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signupUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import { UserOtp } from './schemas/auth_otp_store.schema';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        @InjectModel(AllRoles.name)
        private roleModel: Model<AllRoles>,
        @InjectModel(UserOtp.name)
        private userOtpModel: Model<UserOtp>,
        private jwtService: JwtService) { }


    async signUp(signUpDto: SignUpDto): Promise<{ token: any; role: any; userid: any; }> {
        const { name, email, phone, password, role, status, last_login, token, otp } = signUpDto;


        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) {
            throw new ConflictException('Email already in use');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role,
            status,
            last_login,
            token,
            otp,
        });
        const jwtToken = this.jwtService.sign({ id: user._id });
        user.token = jwtToken;
        await user.save();
        return { token: jwtToken, role: user.role, userid: user._id };
    }
    async login(loginDto: LoginDto): Promise<{ token: any, user: any }> {

        const { email, password } = loginDto;

        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const token = this.jwtService.sign({ id: user._id });
        if (token) {
            const date = new Date();
            user.last_login = date;
            user.save()
        }

        return { token, user: user };
    }

    async getotp(id: any): Promise<any> {
        const user = await this.userOtpModel.findOne({ userid: id });

        if (!user) {
            throw new UnauthorizedException('Invalid ID');
        }
        return { otp: user.otp }
    }

    async getAllRoles(): Promise<any> {
        const roles = await this.roleModel.find({ status: "active" });

        if (!roles || roles.length === 0) {
            throw new NotFoundException('No roles found');
        }

        return roles;
    }

    async saveUserOtp(userid: string, otp: number): Promise<any> {

        const existingUser = await this.userOtpModel.findOne({ userid });

        if (existingUser) {
            existingUser.otp = otp;
            await existingUser.save();
            return existingUser._id.toString();
        } else {
            const userOtp = new this.userOtpModel({ userid, otp });
            await userOtp.save();
            return userOtp._id.toString();
        }
    }
}
