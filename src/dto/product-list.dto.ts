import { ApiProperty } from "@nestjs/swagger";


export class ProductListDTO {
  @ApiProperty({
    required: false
  })
  category?: number;

  @ApiProperty()
  priceMax?: number;

  @ApiProperty()
  priceMin?: number;

  @ApiProperty({
    minimum: 0,
    maximum: 5,
  })
  rating?: number;

  @ApiProperty()
  title?: string;

  @ApiProperty({
    enum: ['id', 'price', 'rating', 'title'],
    default: 'id',
  })
  sort?: 'price' | 'rating' | 'title';

  @ApiProperty({
    enum: ['asc', 'desc'],
    default: 'asc',
  })
  sortDir?: 'asc' | 'desc';
}
