import { PaginationResponse } from "./pagination.response";
import { ApiProperty } from "@nestjs/swagger";
import { UserModel } from "../models/user.model";


export class UserListResponse extends PaginationResponse {
  @ApiProperty()
  data: UserModel[];
}
