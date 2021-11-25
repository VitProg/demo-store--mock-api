import { Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { DataService } from "../../data/data.service";
import { UserModel } from "../../models/user.model";
import { ProductModel } from "../../models/product.model";

@ApiTags('products')
@Controller('product')
export class ItemController {
  constructor(private db: DataService) {

  }

  @Post(':id')
  @ApiParam({ name: 'id', type: Number })
  async get (@Param('id', ParseIntPipe) id: number): Promise<ProductModel | undefined> {
    return this.db.product(id);
  }
}
