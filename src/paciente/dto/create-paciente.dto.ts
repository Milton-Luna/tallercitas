import { IsString, IsOptional, IsDateString, IsEmail } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  apellidos?: string;

  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
