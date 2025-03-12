import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @Column('simple-array', { nullable: true }) // Array de rutas (permisos)
  permissions: string[];

  @Column('simple-array', { nullable: true }) // Array de notificaciones
  notifications: string[];
}