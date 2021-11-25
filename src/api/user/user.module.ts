import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { DataModule } from "../../data/data.module";
import { ItemController } from './item.controller';

@Module({
  imports: [DataModule],
  controllers: [ListController, ItemController]
})
export class UserModule {}
