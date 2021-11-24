import { Controller } from '@nestjs/common';
import { DataService } from "../../data/data.service";

@Controller('my')
export class MyController {
  constructor(private db: DataService) {

  }
}

