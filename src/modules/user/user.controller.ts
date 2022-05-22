import {
  Body,
  Controller,
  HttpCode,
  Post,
  Res,
  Response,
} from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';
import { ResponseHelper } from 'src/common/helpers/response.helper';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return new ResponseHelper(res).created(user);
  }
}
