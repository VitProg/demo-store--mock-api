import { Body, Controller, Post } from '@nestjs/common';
import { DataService } from "../../../data/data.service";
import { ProductListDTO } from "../../../dto/product-list.dto";


@Controller('products')
export class ListController {

  constructor(private db: DataService) {

  }

  @Post()
  index(@Body() dto: ProductListDTO) {
    return this.db.products(dto);
  }

  @Post('count')
  async count(@Body() dto: ProductListDTO) {
    const list = await this.db.products(dto);
    return list.count;
  }



}
