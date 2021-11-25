import { ApiProperty } from "@nestjs/swagger";
import { ProductModel } from "../models/product.model";
import { PaginationResponse } from "./pagination.response";


export class ProductListResponse extends PaginationResponse {
  @ApiProperty()
  data: Array<ProductModel>;
}
