import { ApiProperty } from "@nestjs/swagger";
import { AddressModel } from "../models/address.model";


export class UserResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  name: {
    firstname: string,
    lastname: string,
  };

  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: AddressModel;
}
