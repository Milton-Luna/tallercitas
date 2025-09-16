import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitaDto } from './dto/create-cita.dto';
import { CitaEntity } from './entity/cita.entity';
import { PacienteEntity } from 'src/paciente/entity/paciente.entity';
import { MedicoEntity } from 'src/medico/entity/medico.entity';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(CitaEntity)
    private citasRepo: Repository<CitaEntity>,
    @InjectRepository(PacienteEntity)
    private pacientesRepo: Repository<PacienteEntity>,
    @InjectRepository(MedicoEntity)
    private medicosRepo: Repository<MedicoEntity>,
  ) {}

  async create(dto: CreateCitaDto) {
    const paciente = await this.pacientesRepo.findOne({ where: { id: dto.pacienteId } });
    const medico = await this.medicosRepo.findOne({ where: { id: dto.medicoId } });
    const cita = this.citasRepo.create({
      ...(dto.fecha && { fecha: dto.fecha }),
      ...(dto.hora && { hora: dto.hora }),
      ...(dto.motivo && { motivo: dto.motivo }),
      ...(paciente && { paciente }),
      ...(medico && { medico }),
    });
    return this.citasRepo.save(cita);
  }

  findOne(id: number) {
    return this.citasRepo.findOne({ where: { id } });
  }
}
