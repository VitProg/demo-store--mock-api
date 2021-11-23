import { Module } from '@nestjs/common';
import { ListController } from './list/list.controller';
import { ItemController } from './item/item.controller';
import { DataModule } from "../../data/data.module";


@Module({
  imports: [DataModule],
  controllers: [ListController, ItemController]
})
export class ProductModule {
}
