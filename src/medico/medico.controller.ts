import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { MedicosService } from './medico.service';


@Controller('medicos')
export class MedicoController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  create(@Body() dto: CreateMedicoDto) {
    return this.medicosService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMedicoDto) {
    return this.medicosService.update(+id, dto);
  }
}
