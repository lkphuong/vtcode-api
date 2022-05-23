import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginDto } from '../dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from 'src/common/exceptions/not_found.exception';
import { BadRequestException } from 'src/common/exceptions/index.exception';
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.userRepository.findOne({
      username: loginDto.username,
    });
    if (!user) {
      throw new NotFoundException(3006, 'Người dùng không tồn tại');
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch)
      throw new BadRequestException(
        1001,
        'Username hoặc mật khẩu không chính xác',
      );
    return {
      id: user.id,
      username: user.username,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      process.env.SALT,
    );
    return await this.userRepository.save(createUserDto);
  }

  async findById(id: number): Promise<any> {
    const user = await this.userRepository.findOne(id);
    return {
      id: user.id,
      username: user.username,
    };
  }
}
