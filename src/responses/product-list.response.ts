import { ApiProperty } from "@nestjs/swagger";
import { ProductModel } from "../models/product.model";


export class ProductListResponse {
  @ApiProperty()
  page: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  data: Array<ProductModel>;
}
