import { Test, TestingModule } from '@nestjs/testing';
import { CarbonCertificateController } from './carbon-certificate.controller';
import { CarbonCertificateService } from './carbon-certificate.service';

describe('CarbonCertificateController', () => {
  let controller: CarbonCertificateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarbonCertificateController],
      providers: [CarbonCertificateService],
    }).compile();

    controller = module.get<CarbonCertificateController>(CarbonCertificateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
