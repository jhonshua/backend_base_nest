export class CreateRoleDto {
  name: string;
  permissions?: string[]; // Opcional
  notifications?: string[]; // Opcional
}