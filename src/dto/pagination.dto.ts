import { ApiProperty } from "@nestjs/swagger";


export class PaginationDto {
  @ApiProperty({
    minimum: 1,
    default: 1,
    description: "Page number",
  })
  page?: number = 1;

  @ApiProperty({
    default: 10,
    minimum: 5,
    maximum: 100,
    description: "Number of items on the page (10 - 100)"
  })
  pageSize?: number = 10;
}
