import { ApiProperty } from "@nestjs/swagger";


export class CategoryModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string;
}
