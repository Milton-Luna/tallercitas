import { Module } from '@nestjs/common';
import { CitasController } from './cita.controller';
import { CitasService } from './cita.service';
import { CitaEntity } from './entity/cita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoEntity } from '../medico/entity/medico.entity';
import { PacienteEntity } from '../paciente/entity/paciente.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CitaEntity, MedicoEntity, PacienteEntity])],
  controllers: [CitasController],
  providers: [CitasService]
})
export class CitaModule {}
