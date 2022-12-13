import { Injectable } from '@nestjs/common';
import { CreateCarbonCertificateDto } from './dto/create-carbon-certificate.dto';
import { UpdateCarbonCertificateDto } from './dto/update-carbon-certificate.dto';

@Injectable()
export class CarbonCertificateService {
  create(createCarbonCertificateDto: CreateCarbonCertificateDto) {
    return 'This action adds a new carbonCertificate';
  }

  findAll() {
    return `This action returns all carbonCertificate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carbonCertificate`;
  }

  update(id: number, updateCarbonCertificateDto: UpdateCarbonCertificateDto) {
    return `This action updates a #${id} carbonCertificate`;
  }

  remove(id: number) {
    return `This action removes a #${id} carbonCertificate`;
  }
}
