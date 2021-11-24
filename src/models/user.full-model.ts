import { ApiProperty } from "@nestjs/swagger";
import { AddressModel } from "./address.model";
import { UserModel } from "./user.model";


export class UserFullModel extends UserModel {
  @ApiProperty()
  password: string;
}

