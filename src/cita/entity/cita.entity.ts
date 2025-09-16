import { Entity,PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MedicoEntity } from "../../medico/entity/medico.entity";
import { PacienteEntity } from "../../paciente/entity/paciente.entity";
@Entity('cita')
export class CitaEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'date'})
    fecha: Date;

    @Column({type: 'time'})
    hora: string;

    @Column({length:255})
    motivo: string;

    @ManyToOne(() => MedicoEntity, (medico) => medico.citas)
    medico: MedicoEntity;

    @ManyToOne(() => PacienteEntity, (paciente) => paciente.citas)
    paciente: PacienteEntity;
}