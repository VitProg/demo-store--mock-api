import { Test, TestingModule } from '@nestjs/testing';
import { ListController } from './list.controller';
import { DataService } from '../../data/data.service';

describe('ListController', () => {
  let controller: ListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [DataService],
    }).compile();

    controller = module.get<ListController>(ListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
