import { Injectable, OnModuleInit, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService implements OnModuleInit {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async onModuleInit() {
    await this.createDefaultRole();
  }

  private async createDefaultRole() {
    const defaultRoleName = 'admin_dev';
    const existingRole = await this.roleRepository.findOne({
      where: { name: defaultRoleName },
    });

    if (!existingRole) {
      const defaultRole = this.roleRepository.create({
        name: defaultRoleName,
        permissions: [ 'all'], // Permisos predeterminados
        notifications: ['all'], // Notificaciones predeterminadas
      });
      await this.roleRepository.save(defaultRole);
      console.log(`Default role '${defaultRoleName}' created.`);
    } else {
      console.log(`Default role '${defaultRoleName}' already exists.`);
    }
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
    return role;
  }

  async findOneByName(name: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { name } });
    if (!role) {
      throw new NotFoundException(`Role with name '${name}' not found`);
    }
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.findOne(id);
    this.roleRepository.merge(role, updateRoleDto);
    return this.roleRepository.save(role);
  }

  async remove(id: number): Promise<void> {
    const role = await this.findOne(id);
    await this.roleRepository.remove(role);
  }
}