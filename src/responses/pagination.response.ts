import { ApiProperty } from "@nestjs/swagger";


export class PaginationResponse {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  total: number;
}
