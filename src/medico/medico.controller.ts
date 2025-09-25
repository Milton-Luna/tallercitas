import { Controller, Get, Put, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { MedicosService } from './medico.service';


@Controller('medicos')
export class MedicoController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  async create(@Body() dto: CreateMedicoDto) {
    return this.medicosService.create(dto);
  }

  @Get()
  async findAll() {
    return this.medicosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.medicosService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateMedicoDto) {
    return this.medicosService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.medicosService.remove(+id);
  }
}
