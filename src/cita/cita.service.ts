import { Injectable, NotFoundException } from '@nestjs/common';
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
  const paciente = await this.pacientesRepo.findOneBy({ id: dto.pacienteId });
  if (!paciente) throw new NotFoundException('Paciente no encontrado');

  const medico = await this.medicosRepo.findOneBy({ id: dto.medicoId });
  if (!medico) throw new NotFoundException('Médico no encontrado');

  const cita = this.citasRepo.create({
    fecha: dto.fecha,
    hora: dto.hora,
    motivo: dto.motivo,
    paciente,
    medico,
  });

  return await this.citasRepo.save(cita);
}

  findall() {
    return this.citasRepo.find({ relations: ['paciente', 'medico'] });
  }

  findOne(id: number) {
    return this.citasRepo.findOne({ where: { id } });
  }

  async remove(id: number): Promise<string> {
    await this.citasRepo.delete(id);
    return "Medico eliminado exitosamente";
  }
}
