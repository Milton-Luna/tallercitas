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

  async create(dto: CreateMedicoDto):Promise<string> {
    const medico = this.medicosRepo.create(dto);
    await this.medicosRepo.save(medico);
    return "Médico creado exitosamente";
  }

  async findAll() {
    return await this.medicosRepo.find();
  }
  
  async findOne(id: number) {
    return await this.medicosRepo.findOne({ where: { id } });
  }

 async update(id: number, dto: UpdateMedicoDto) {
  const result = await this.medicosRepo
    .createQueryBuilder()
    .update('medico')
    .set({
      nombre: dto.nombre,
      apellidos: dto.apellidos,
      especialidad: dto.especialidad,
      telefono: dto.telefono,
      email: dto.email,
    })
    .where('id = :id', { id })
    .execute();

  if (result.affected === 0) {
    throw new NotFoundException('Médico no encontrado');
  }

  return this.medicosRepo
    .createQueryBuilder('medico')
    .where('medico.id = :id', { id })
    .getOne();
}


  async remove(id: number): Promise<string> {
    await this.medicosRepo.delete(id);
    return "Medico eliminado exitosamente";
  }
}
