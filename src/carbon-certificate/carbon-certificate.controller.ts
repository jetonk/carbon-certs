import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarbonCertificateService } from './carbon-certificate.service';
import { CreateCarbonCertificateDto } from './dto/create-carbon-certificate.dto';
import { UpdateCarbonCertificateDto } from './dto/update-carbon-certificate.dto';

@Controller('carbon-certificate')
export class CarbonCertificateController {
  constructor(private readonly carbonCertificateService: CarbonCertificateService) {}

  @Post()
  create(@Body() createCarbonCertificateDto: CreateCarbonCertificateDto) {
    return this.carbonCertificateService.create(createCarbonCertificateDto);
  }

  @Get()
  findAll() {
    return this.carbonCertificateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carbonCertificateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarbonCertificateDto: UpdateCarbonCertificateDto) {
    return this.carbonCertificateService.update(+id, updateCarbonCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carbonCertificateService.remove(+id);
  }
}
