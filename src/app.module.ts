import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';


@Module({
  imports: [ApiModule, DataModule],
})
export class AppModule {
}
