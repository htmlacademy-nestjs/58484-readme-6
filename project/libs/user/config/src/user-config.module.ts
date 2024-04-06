import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const ENV_USERS_FILE_PATH = 'apps/user/user.env';

import appConfig from './configurations/app.config';
import mongoConfig from './configurations/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, mongoConfig],
      envFilePath: ENV_USERS_FILE_PATH,
    }),
  ],
})
export class UserConfigModule {}
