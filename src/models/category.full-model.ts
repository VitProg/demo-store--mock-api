import { ApiProperty } from "@nestjs/swagger";
import { CategoryModel } from "./category.model";


export class CategoryFullModel extends CategoryModel {
  @ApiProperty()
  sort: number;
}
