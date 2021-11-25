import { Module } from '@nestjs/common';
import { DataModule } from "../../data/data.module";
import { UserController } from './user.controller';

@Module({
  imports: [DataModule],
  controllers: [UserController]
})
export class UserModule {}
