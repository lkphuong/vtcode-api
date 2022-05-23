import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { MysqlExceptionFilter } from './common/exceptions/mysql.exception';
import { CustomValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new MysqlExceptionFilter());
  app.useGlobalPipes(
    new CustomValidationPipe({
      skipMissingProperties: true,
      whitelist: true,
    }),
  );
  await app.listen(process.env.port || 3000);
}
bootstrap();
