import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [ApiModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
