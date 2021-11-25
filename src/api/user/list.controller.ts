import { Body, Controller, Post } from '@nestjs/common';
import { DataService } from "../../data/data.service";
import { ApiTags } from "@nestjs/swagger";
import { PaginationDto } from "../../dto/pagination.dto";
import { UserListResponse } from "../../responses/user-list.response";


@ApiTags('users')
@Controller('user/list')
export class ListController {
  constructor(private db: DataService) {

  }

  @Post()
  index(
    @Body() dto: PaginationDto,
  ): Promise<UserListResponse> {
    return this.db.users(dto);
  }
}
