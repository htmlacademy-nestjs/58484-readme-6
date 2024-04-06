import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { BlogUserRepository, BlogUserEntity } from '@project/blog-user';
import { UserRole } from '@project/core';

import { CreateUserDto } from '../dto/create-user.dto';
import { AuthUserMessage } from './authentication.constant';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserRepository) {}

  public async register(dto: CreateUserDto): Promise<BlogUserEntity> {
    const { email, password, name, avatar = '' } = dto;

    const blogUser = {
      email,
      name,
      avatar,
      role: UserRole.USER,
      passwordHash: '',
    };

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AuthUserMessage.Exists);
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);

    await this.blogUserRepository.save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AuthUserMessage.NotFound);
    }

    if (!(await existUser.comparePassword(password))) {
      throw new UnauthorizedException(AuthUserMessage.PasswordWrong);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const existUser = await this.blogUserRepository.findById(id);

    if (!existUser) {
      throw new NotFoundException(AuthUserMessage.NotFound);
    }

    return existUser;
  }
}
