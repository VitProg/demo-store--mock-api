import { ApiProperty } from "@nestjs/swagger";


export class AddressModel {
  @ApiProperty()
  geolocation: {
    lat: number,
    long: number,
  };

  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  zipcode: string;
}

