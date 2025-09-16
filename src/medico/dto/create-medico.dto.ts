import { IsString, IsEmail } from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  nombre: string;


  @IsString()
  apellidos?: string;

  @IsString()
  especialidad: string;


  @IsString()
  telefono?: string;

 
  @IsEmail()
  email?: string;
}
