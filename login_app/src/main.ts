import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  mongoose.connection.on('connected', () => {
    console.log('Database connected');
  });
  mongoose.connection.on('error', (err) => {
    console.error('Database connection error:', err);
  });
  await app.listen(process.env.PORT ?? 8080);
  console.log(`App is started on http://localhost:${process.env.PORT ?? 8080}`);
}
bootstrap();
