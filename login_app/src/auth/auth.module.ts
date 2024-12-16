import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/auth.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';
import { AllRolesSchema } from './schemas/auth_getallroles.schema';
import { UserOtpSchema } from './schemas/auth_otp_store.schema';



@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<any>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<any>('JWT_EXPIRES')
          }
        }
      }
    }),
    MongooseModule.forFeature([
      { name: "User", schema: UserSchema },
      { name: 'AllRoles', schema: AllRolesSchema },
      { name: 'UserOtp', schema: UserOtpSchema },
    ]),

  ],
  controllers: [AuthController],
  providers: [AuthService]

})


export class AuthModule { }

