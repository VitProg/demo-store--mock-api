import { Body, Controller, Get, Header, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { DataService } from "../../data/data.service";
import { ProductListDTO } from "../../dto/product-list.dto";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ProductListResponse } from "../../responses/product-list.response";
import { ProductModel } from "../../models/product.model";
import { ProductCountDTO } from "../../dto/product-count.dto";
import { Request } from "express";


@ApiTags('products')
@Controller('product')
export class ProductController {

  readonly pageSize = 10;

  constructor(private db: DataService) {

  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  get (@Param('id', ParseIntPipe) id: number): Promise<ProductModel | undefined> {
    return this.db.product(id);
  }

  @Get()
  @Header('Cache-Control', 'none')
  list(
    @Query() dto: ProductListDTO,
  ): Promise<ProductListResponse> {
    return this.db.products(dto);
  }

  @Get('count')
  async count(
    @Param() dto: ProductCountDTO,
  ): Promise<number> {
    const list = await this.db.products({ ...dto, page: 1, pageSize: Infinity });
    return list.count;
  }
}
