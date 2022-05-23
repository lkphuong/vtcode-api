import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginDto } from './dto/index';
import { UserRepository } from './respositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findOne(loginDto: LoginDto): Promise<any> {
    return await this.userRepository.login(loginDto);
  }

  async findById(id: number): Promise<any> {
    return await this.userRepository.findById(id);
  }
}
