import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { setupSwagger } from './setup-swagger';
import { ConfigService } from '@nestjs/config';

const GLOBAL_PREFIX = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);

  setupSwagger(app, {
    title: 'The «Account» service',
    description: 'Account service API',
  });

  const configService = app.get(ConfigService);
  const port = configService.get('app.port');

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${GLOBAL_PREFIX}`
  );
}

bootstrap();
