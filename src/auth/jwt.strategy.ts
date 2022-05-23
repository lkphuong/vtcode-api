import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from 'src/modules/user/user.service';
import { UnauthorizedException } from 'src/common/exceptions/index.exception';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const account = await this.userService.findById(payload.id);

    if (!account) {
      throw new UnauthorizedException(
        1001,
        'Cần phải đăng nhập trước khi gọi request',
      );
    }

    const { id, username } = account;

    const accountData = {
      id,
      username,
    };

    return accountData;
  }
}
