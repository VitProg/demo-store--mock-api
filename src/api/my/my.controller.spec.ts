import { Test, TestingModule } from '@nestjs/testing';
import { MyController } from './my.controller';
import { DataService } from "../../data/data.service";

describe('MyController', () => {
  let controller: MyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyController],
      providers: [DataService],
    }).compile();

    controller = module.get<MyController>(MyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
