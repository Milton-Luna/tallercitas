import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { CitasService } from './cita.service';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  create(@Body() dto: CreateCitaDto) {
    return this.citasService.create(dto);
  }


  @Get()  findAll() {
    return this.citasService.findall();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citasService.findOne(+id);
  }

  @Delete(':id')
   async remove(@Param('id') id: string) {
    return this.citasService.remove(+id);
  }
}
