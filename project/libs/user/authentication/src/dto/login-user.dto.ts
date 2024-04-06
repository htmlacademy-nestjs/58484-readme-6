import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.com',
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '12345678',
  })
  public password: string;
}
