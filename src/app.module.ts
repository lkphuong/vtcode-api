import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigRootModule } from './config/index.module';
import { MysqlModule } from './database/index.module';
import { RootModule } from './modules/index.module';

@Module({
  imports: [ConfigRootModule, MysqlModule, AuthModule, RootModule],
})
export class AppModule {}
