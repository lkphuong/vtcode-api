import { Module } from '@nestjs/common';
import { AppConfigModule } from './app/app.module';
import { MysqlModule } from './database/database.module';

@Module({
  imports: [AppConfigModule, MysqlModule],
})
export class ConfigRootModule {}
