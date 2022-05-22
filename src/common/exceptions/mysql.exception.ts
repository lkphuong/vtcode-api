import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { QueryError } from 'mysql2';
import { getDupKeyMysql } from '../utils/function.util';
import { Request, Response } from 'express';

@Catch()
export class MysqlExceptionFilter implements ExceptionFilter {
  catch(exception: QueryError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let errorMessage = '';
    let errorValue = [];
    switch (exception.errno) {
      case 1062:
        errorMessage = 'Duplicated field';

        errorValue.push(getDupKeyMysql(exception.message));

        response.status(HttpStatus.BAD_REQUEST).json({
          data: [],
          errorCode: 4006,
          message: 'Duplicated field',
          errors: errorValue,
        });
    }
  }
}
