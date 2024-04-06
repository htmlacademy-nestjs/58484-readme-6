import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface SwaggerOptions {
  title: string;
  description: string;
  path?: string;
  version?: string;
}

export const setupSwagger = (
  app: INestApplication,
  options: SwaggerOptions
) => {
  const { path = 'spec', title, description, version = '1.0' } = options;

  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(path, app, document);
};
