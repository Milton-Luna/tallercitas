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

  async create(dto: CreatePacienteDto): Promise<string> {
    const paciente = this.pacientesRepo.create(dto);
    await this.pacientesRepo.save(paciente);
    return "Paciente creado exitosamente";
  }

  async findAll() : Promise<PacienteEntity[]> {
    return await this.pacientesRepo.find();
  }

  async findOne(id: number): Promise<PacienteEntity | null> {
    return await this.pacientesRepo.findOne({ where: { id } });
  }

  async remove(id: number): Promise<string> {
    
    await this.pacientesRepo.delete(id);
    return "Paciente eliminado exitosamente";
  }
}
