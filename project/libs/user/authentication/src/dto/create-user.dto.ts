import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  public name: string;

  @ApiProperty({
    description: 'User last name',
    example: '12345678',
  })
  public password: string;

  @ApiProperty({
    description: 'User avatar',
    example: '/avatar.jpg',
  })
  public avatar?: string;
}
