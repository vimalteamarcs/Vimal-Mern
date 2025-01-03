import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, businessSchema } from './schema/business.schema';
import { CheckTokenMiddleware } from 'src/check-token/check-token.middleware';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Business.name, schema: businessSchema }]),
  ],
  providers: [BusinessService],
  controllers: [BusinessController],
})


export class BusinessModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckTokenMiddleware)
      .forRoutes('/business');

  }
}
