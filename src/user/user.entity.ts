import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string; // Add username field

  @Column()
  password: string;

  @Column({ default: 'user' }) // Roles: 'user', 'admin'
  role: string;
}
