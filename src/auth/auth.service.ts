import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/modules/user/dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findOne(loginDto);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { id: user.id, username: user.username };
    const access_token = await this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return {
      access_token,
    };
  }
}
