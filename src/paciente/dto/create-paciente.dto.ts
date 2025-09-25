import { IsString, IsDateString, IsEmail } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nombre: string;

 
  @IsString()
  apellidos: string;

 
  @IsDateString()
  fecha_nacimiento: string;

  
  @IsEmail()
  email: string;
}
