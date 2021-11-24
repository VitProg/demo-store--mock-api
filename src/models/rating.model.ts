import { ApiProperty } from "@nestjs/swagger";


export class RatingModel {
  @ApiProperty()
  rate: number;

  @ApiProperty()
  count: number;
}
