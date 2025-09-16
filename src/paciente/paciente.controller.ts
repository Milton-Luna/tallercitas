import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';

import { CreatePacienteDto } from './dto/create-paciente.dto';
import { PacientesService } from './paciente.service';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  create(@Body() dto: CreatePacienteDto) {
    return this.pacientesService.create(dto);
  }

  @Get()
  findAll() {
    return this.pacientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacientesService.remove(+id);
  }
}
