import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DataService } from "../../data/data.service";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { UserModel } from "../../models/user.model";
import { PaginationDto } from "../../dto/pagination.dto";
import { UserListResponse } from "../../responses/user-list.response";


@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private db: DataService) {

  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  get(@Param('id', ParseIntPipe) id: number): Promise<UserModel | undefined> {
    return this.db.user(id);
  }

  @Get()
  list(@Param() dto: PaginationDto): Promise<UserListResponse> {
    return this.db.users(dto);
  }
}
