
import { IsEmail, NotEmpty} from 'class-validator';

export class LoginDto {
  @IsEmail() // Valida que sea un email válido
  @NotEmpty() // Valida que no esté vacío
  email: string;


  @NotEmpty() // Valida que no esté vacío
  password: string;
}