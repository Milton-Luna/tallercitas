import { Entity, PrimaryGeneratedColumn, Column, OneToMany as OnetoMany } from "typeorm";
import { CitaEntity } from '../../cita/entity/cita.entity';



@Entity('medico')
export class MedicoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    nombre:string;

    @Column({length:100})
    apellido:string;

    @Column({length:100})
    especialidad:string;

    @Column({length:100})
    email:string;

    @OnetoMany(() => CitaEntity, (cita) => cita.medico)
    citas:CitaEntity[];
}