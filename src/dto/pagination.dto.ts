import { ApiProperty } from "@nestjs/swagger";


export class PaginationDto {
  @ApiProperty({ minimum: 1 })
  page?: number;

  @ApiProperty({ minimum: 10, maximum: 100 })
  pageSize?: number;
}
