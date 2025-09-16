import { Module } from '@nestjs/common';
import { MedicoController } from './medico.controller';
import { MedicosService } from './medico.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoEntity } from './entity/medico.entity';
import { CitaEntity } from 'src/cita/entity/cita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicoEntity, CitaEntity])],
  controllers: [MedicoController],
  providers: [MedicosService]
})
export class MedicoModule {}
