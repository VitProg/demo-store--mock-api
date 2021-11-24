import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { DataModule } from "../../data/data.module";

@Module({
  imports: [DataModule],
  controllers: [CategoryController]
})
export class CategoryModule {}
