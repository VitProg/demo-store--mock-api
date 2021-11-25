import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ItemController } from './item.controller';
import { DataModule } from "../../data/data.module";


@Module({
  imports: [DataModule],
  controllers: [ListController, ItemController]
})
export class ProductModule {
}
