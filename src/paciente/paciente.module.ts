import { Module } from '@nestjs/common';
import { PacientesController } from './paciente.controller';
import { PacientesService } from './paciente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteEntity } from './entity/paciente.entity';
import { CitaEntity } from 'src/cita/entity/cita.entity';


@Module({
  imports: [TypeOrmModule.forFeature([PacienteEntity, CitaEntity])],
  controllers: [PacientesController],
  providers: [PacientesService]
})
export class PacienteModule {}
