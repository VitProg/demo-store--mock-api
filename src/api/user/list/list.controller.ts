import { Controller, Post } from '@nestjs/common';
import { DataService } from "../../../data/data.service";
import { UserModel } from "../../../models/user.model";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('user/list')
export class ListController {
  constructor(private db: DataService) {

  }

  @Post()
  index(): Promise<Array<UserModel>> {
    return this.db.users();
  }
}
