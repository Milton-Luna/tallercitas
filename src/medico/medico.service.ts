import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { MedicoEntity } from './entity/medico.entity';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(MedicoEntity)
    private medicosRepo: Repository<MedicoEntity>,
  ) {}

  create(dto: CreateMedicoDto) {
    const medico = this.medicosRepo.create(dto);
    return this.medicosRepo.save(medico);
  }

  findOne(id: number) {
    return this.medicosRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateMedicoDto) {
    const medico = await this.medicosRepo.findOne({ where: { id } });
    if (!medico) throw new NotFoundException('Médico no encontrado');
    Object.assign(medico, dto);
    return this.medicosRepo.save(medico);
  }
}
