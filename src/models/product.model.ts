import { ApiProperty } from "@nestjs/swagger";
import { RatingModel } from "./rating.model";


export class ProductModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  rating: RatingModel;
}
