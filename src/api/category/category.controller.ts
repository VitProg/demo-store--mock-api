import { Controller, Get, Post } from '@nestjs/common';
import { CategoryModel } from "../../models/category.model";
import { DataService } from "../../data/data.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('categories')
@Controller('category')
export class CategoryController {

  constructor(private db: DataService) {

  }

  @Get()
  list(): Promise<Array<CategoryModel>> {
    return this.db.categories();
  }

}
