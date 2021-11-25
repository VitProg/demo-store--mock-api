import { Body, Controller, Post } from '@nestjs/common';
import { DataService } from "../../data/data.service";
import { ProductListDTO } from "../../dto/product-list.dto";
import { ApiTags } from "@nestjs/swagger";
import { ProductListResponse } from "../../responses/product-list.response";


@ApiTags('products')
@Controller('products')
export class ListController {

  readonly pageSize = 10;

  constructor(private db: DataService) {

  }

  @Post()
  index(
    @Body() dto: ProductListDTO,
  ): Promise<ProductListResponse> {
    return this.db.products(dto);
  }

  @Post('count')
  async count(@Body() dto: ProductListDTO): Promise<number> {
    const list = await this.db.products({ ...dto, page: 1, pageSize: Infinity });
    return list.count;
  }


}
