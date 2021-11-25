import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DataModule } from "../../data/data.module";


@Module({
  imports: [DataModule],
  controllers: [ProductController],
})
export class ProductModule {
}
