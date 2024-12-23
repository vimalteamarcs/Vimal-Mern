import { ConflictException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/auth.schema';
import { AllRoles } from './schemas/auth_getallroles.schema'
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signupUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import { UserOtp } from './schemas/auth_otp_store.schema';
import { ApiResponse } from 'src/common/response.helper';

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


    async signUp(signUpDto: SignUpDto): Promise<any> {
        try {
            const { name, email, phone, password, role } = signUpDto;
            const last_login = new Date();
            let status = "";
            if (role === 1 || role === 2) {
                status = "pending";
            } else {
                status = "active";
            }


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
                token: "",
                otp: "",
            });

            const inotp = await this.userOtpModel.create({
                userid: user._id,
                otp: Math.floor(100000 + Math.random() * 900000).toString(),
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
            });
            await inotp.save();
            user.otp = inotp._id.toString();
            // const jwtToken = this.jwtService.sign({ id: user._id });
            // user.token = jwtToken;
            await user.save();

            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'Signup successfully',
                [{ userid: user._id }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to Signup',
                null
            );
        }
    }

    async login(loginDto: LoginDto): Promise<any> {
        try {
            const { email, password } = loginDto;

            const user = await this.userModel.findOne({ email }).select('-createdAt -updatedAt -otp -last_login');

            if (!user) {
                throw new UnauthorizedException('Invalid email or password');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new UnauthorizedException('Invalid email or password');
            }

            const userWithRole = await this.userModel.aggregate([
                { $match: { email } },
                {
                    $lookup: {
                        from: 'AllRoles',
                        localField: 'role',
                        foreignField: 'id',
                        as: 'role_details',
                    },
                },
                { $unwind: '$role_details' },
                {
                    $project: {
                        name: 1,
                        email: 1,
                        phone: 1,
                        role_name: '$role_details.role_name',
                        _id: 1,

                    },
                },
            ]);

            if (!userWithRole || userWithRole.length === 0) {
                throw new UnauthorizedException('Invalid email or password');
            }

            const userResult = userWithRole[0];

            const token = this.jwtService.sign({ id: user._id }, { expiresIn: '1h' });

            const date = new Date();
            user.last_login = date;
            user.token = token;
            await user.save();


            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'Login successfully',
                [{ token, user: userResult }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to Login',
                null
            );
        }

    }


    async getotp(id: any): Promise<any> {
        try {
            const user = await this.userOtpModel.findOne({ userid: id });

            if (!user) {
                throw new UnauthorizedException('Invalid ID');
            }

            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'OTP retrieved successfully',
                [{ otp: user.otp }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to retrieved OTP',
                null
            );
        }

    }

    async getAllRoles(): Promise<any> {
        try {
            // const roles = await this.roleModel.find({ status: "active", role_name: { $ne: "Admin" } });
            const roles = await this.roleModel.find({ role_name: { $ne: "Admin" } });

            if (!roles || roles.length === 0) {
                throw new NotFoundException('No roles found');
            }


            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'Roles retrieved successfully',
                [roles]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to retrieved Roles',
                []
            );
        }
    }

    async CheckUserOtp(userid: string, otp: string): Promise<any> {
        try {
            const existingUser = await this.userOtpModel.findOne({ userid });

            if (existingUser) {

                if (Number(existingUser.otp.toString()) === Number(otp.toString())) {
                    return new ApiResponse(
                        HttpStatus.OK,
                        'success',
                        'OTP Matched successfully',
                        [{ userid }]
                    );
                }
                return new ApiResponse(
                    HttpStatus.NOT_FOUND,
                    'failed',
                    "OTP did not Matched",
                    []
                );


            }
            else {
                return new ApiResponse(
                    HttpStatus.NOT_FOUND,
                    'failed',
                    "User Not Found",
                    []
                );
            }


        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to retrieved Roles',
                null
            );
        }
    }
}
