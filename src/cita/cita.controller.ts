import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { CitasService } from './cita.service';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  create(@Body() dto: CreateCitaDto) {
    return this.citasService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citasService.findOne(+id);
  }
}
