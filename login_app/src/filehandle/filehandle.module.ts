// import { Injectable, MiddlewareConsumer, NestModule } from '@nestjs/common';
// import { CheckTokenMiddleware } from 'src/check-token/check-token.middleware';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';

import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { FilehandleService } from './filehandle.service';
import { FilehandleController } from './filehandle.controller';
import { CheckTokenMiddleware } from 'src/check-token/check-token.middleware';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<any>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<any>('JWT_EXPIRES'),
          },
        };
      },
    }),
  ],
  controllers: [FilehandleController],
  providers: [FilehandleService],
})
export class FilehandleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckTokenMiddleware)
      .forRoutes('filehandle/upload');
  }
}
