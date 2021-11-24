import { ApiProperty } from "@nestjs/swagger";


export class ListResponse<Item> {
  @ApiProperty()
  page: number;

  @ApiProperty()
  count: number;

  data: Array<Item>;
}
