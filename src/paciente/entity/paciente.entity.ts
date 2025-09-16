import { CitaEntity } from '../../cita/entity/cita.entity';
import { OneToMany, Entity, Column, PrimaryGeneratedColumn} from 'typeorm/browser';
@Entity('paciente')
export class PacienteEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:100})
    nombre:string;

    @Column({length:100})
    apellido:string;

    @Column({type: 'date'})
    fecha_nacimiento: Date;

    @Column({length:100})
    email:string;

    @OneToMany(() => CitaEntity, (cita) => cita.paciente)
    citas:CitaEntity[];
}