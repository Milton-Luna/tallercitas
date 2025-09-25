import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { PacientesService } from './paciente.service';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  async create(@Body() dto: CreatePacienteDto) {
    return this.pacientesService.create(dto);
  }

  @Get()
  async findAll() {
    return this.pacientesService.findAll();

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pacientesService.remove(+id);
  }
}
