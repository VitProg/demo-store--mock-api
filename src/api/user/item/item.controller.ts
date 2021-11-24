import { Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DataService } from "../../../data/data.service";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { UserModel } from "../../../models/user.model";

@ApiTags('users')
@Controller('user')
export class ItemController {
  constructor(private db: DataService) {

  }

  @Post(':id')
  @ApiParam({ name: 'id', type: Number })
  async get (@Param('id', ParseIntPipe) id: number): Promise<UserModel | undefined> {
    return this.db.user(id);
  }
}
