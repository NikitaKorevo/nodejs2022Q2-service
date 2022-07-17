import 'dotenv/config';
import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(env.PORT || 4000);

  console.log(`server start ${await app.getUrl()}`);
}
bootstrap();
