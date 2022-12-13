import { Module } from '@nestjs/common';
import { CarbonCertificateService } from './carbon-certificate.service';
import { CarbonCertificateController } from './carbon-certificate.controller';

@Module({
  controllers: [CarbonCertificateController],
  providers: [CarbonCertificateService]
})
export class CarbonCertificateModule {}
