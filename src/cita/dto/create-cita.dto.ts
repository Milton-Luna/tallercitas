import { IsDateString, IsString, IsInt } from 'class-validator';
export class CreateCitaDto {

  @IsDateString()
  fecha: string;

  @IsString()
  hora: string;

  @IsString()
  motivo: string;

  @IsInt()
  pacienteId: number;

  @IsInt()
  medicoId: number;
}
