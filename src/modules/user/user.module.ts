import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { RoleModule } from '../role/role.module'; // Importamos RoleModule

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Registra la entidad User
    RoleModule, // Importamos RoleModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}