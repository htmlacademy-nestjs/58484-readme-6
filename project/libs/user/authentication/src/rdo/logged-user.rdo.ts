import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.com',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'token',
  })
  @Expose()
  public accessToken: string;
}
