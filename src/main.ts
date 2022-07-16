import 'dotenv/config';
import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT || 4000);

  console.log(`server start ${await app.getUrl()}`);
}
bootstrap();
