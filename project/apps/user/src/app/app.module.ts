import { Module } from '@nestjs/common';

import { BlogUserModule } from '@project/blog-user';
import { AuthenticationModule } from '@project/authentication';
import { UserConfigModule, getMongooseOptions } from '@project/user-config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthenticationModule,
    BlogUserModule,
    UserConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
