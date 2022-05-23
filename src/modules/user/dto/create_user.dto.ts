import { ObjectID } from 'typeorm';
import {
  IsBoolean,
  IsDate,
  IsDefined,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsDefined({ message: 'Tên đăng nhập không được để trống' })
  @IsNotEmpty({ message: 'Tên đăng nhập không được để trống' })
  @IsString({ message: 'Tên đăng nhập phải là chuỗi' })
  readonly username: string;

  @IsDefined({ message: 'Mật khẩu không được để trống' })
  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 kí tự' })
  @MaxLength(45, { message: 'Mật khẩu phải ngắn hơn 45 kí tự' })
  password: string;

  @IsDefined({ message: 'Tên không được để trống' })
  @IsNotEmpty({ message: 'Tên không được để trống' })
  @IsString({ message: 'Tên phải là chuỗi' })
  readonly fullname: string;
}
