import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { AllRoles } from './schemas/allroles.schema';

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
      { name: "User", schema: User },
      { name: "AllRoles", schema: AllRoles },

    ]),

  ],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule { }
