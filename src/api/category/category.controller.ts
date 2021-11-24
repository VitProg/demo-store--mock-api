import { Controller, Post } from '@nestjs/common';
import { CategoryModel } from "../../models/category.model";
import { DataService } from "../../data/data.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('categories')
@Controller('categories')
export class CategoryController {

  constructor(private db: DataService) {

  }

  @Post()
  index(): Promise<Array<CategoryModel>> {
    return this.db.categories();
  }

}
