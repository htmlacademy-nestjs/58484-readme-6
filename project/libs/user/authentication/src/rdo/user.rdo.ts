import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@project/core';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User avatar',
    example: '/avatar.jpg',
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.com',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User role',
    example: UserRole.User,
    enum: UserRole,
  })
  @Expose()
  public role: string;
}
