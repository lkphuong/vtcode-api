import { Module } from '@nestjs/common';
import { ConfigRootModule } from './config/index.module';
import { IndexModule } from './modules/index.module';

@Module({
  imports: [ConfigRootModule, IndexModule],
})
export class AppModule {}
