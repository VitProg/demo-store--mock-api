import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "./pagination.dto";


export class ProductListDTO extends PaginationDto {
  @ApiProperty({
    description: "Category ID",
    required: false
  })
  category?: number;

  @ApiProperty({
    description: "Minimum prise",
  })
  priceMin?: number;

  @ApiProperty({
    description: "Maximum prise",
  })
  priceMax?: number;

  @ApiProperty({
    description: "Minimum rating",
    minimum: 0,
    maximum: 5,
  })
  rating?: number;

  @ApiProperty({
    description: "Title (searches by occurrence of a substring)"
  })
  title?: string;

  @ApiProperty({
    description: "Field by which the list will be sorted",
    enum: ['id', 'price', 'rating', 'title'],
    default: 'id',
  })
  sort?: 'price' | 'rating' | 'title';

  @ApiProperty({
    description: "Sorting direction",
    enum: ['asc', 'desc'],
    default: 'asc',
  })
  sortDir?: 'asc' | 'desc';
}
