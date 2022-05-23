import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MysqlExceptionFilter } from './common/exceptions/mysql.exception';
import { CustomValidationPipe } from './common/pipes/validation.pipe';
import { AppConfigService } from './config/app/app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService = await app.get(AppConfigService);
  // app.useGlobalFilters(new MysqlExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalPipes(
  //   new CustomValidationPipe({
  //     skipMissingProperties: true,
  //     whitelist: true,
  //   }),
  // );
  await app.listen(appConfig.port);
}
bootstrap();
