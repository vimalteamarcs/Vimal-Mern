import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { MulterModule } from '@nestjs/platform-express';
import { PaymentsModule } from './payments/payments.module';
import { BusinessModule } from './business/business.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    DashboardModule,
    MulterModule.register({ dest: `./uploads/${new Date()}` }),
    BusinessModule,
    PaymentsModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
