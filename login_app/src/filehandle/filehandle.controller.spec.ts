import { Test, TestingModule } from '@nestjs/testing';
import { FilehandleController } from './filehandle.controller';

describe('FilehandleController', () => {
  let controller: FilehandleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilehandleController],
    }).compile();

    controller = module.get<FilehandleController>(FilehandleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
