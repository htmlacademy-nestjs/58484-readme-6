import { Module } from '@nestjs/common';

import { BlogUserModule } from '@project/blog-user';
import { AuthenticationModule } from '@project/authentication';

@Module({
  imports: [AuthenticationModule, BlogUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
