import { ApiProperty } from "@nestjs/swagger";
import { AddressModel } from "./address.model";


export class UserModel {
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

