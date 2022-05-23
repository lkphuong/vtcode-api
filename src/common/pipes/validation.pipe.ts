import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { BadRequestException } from 'src/common/exceptions/index.exception';
import { IValidationError } from '../interfaces/validation_error.interface';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      ...options,
      exceptionFactory: (errors: ValidationError[]) => {
        return new BadRequestException(
          1001,
          'Validation error',
          this.formatErrors(errors),
        );
      },
    });
  }

  private formatErrors(errors: ValidationError[]): IValidationError[] {
    const dataFormateds = [];

    errors.forEach((error) => {
      const dataFormated: IValidationError = {
        key: error.property,
        error: Object.values(error.constraints),
      };

      dataFormateds.push(dataFormated);
    });
    return dataFormateds;
  }
}
