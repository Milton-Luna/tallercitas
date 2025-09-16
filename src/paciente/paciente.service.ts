import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { PacienteEntity } from './entity/paciente.entity';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(PacienteEntity)
    private pacientesRepo: Repository<PacienteEntity>,
  ) {}

  create(dto: CreatePacienteDto) {
    const paciente = this.pacientesRepo.create(dto);
    return this.pacientesRepo.save(paciente);
  }

  findAll() {
    return this.pacientesRepo.find();
  }

  findOne(id: number) {
    return this.pacientesRepo.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.pacientesRepo.delete(id);
  }
}
