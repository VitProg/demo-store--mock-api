import { Module } from '@nestjs/common';
import { MyController } from './my.controller';
import { DataModule } from "../../data/data.module";

@Module({
  imports: [DataModule],
  controllers: [MyController]
})
export class MyModule {}
