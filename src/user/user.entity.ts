import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;

  @Column({length:100, nullable: true })
  username: string;

  @Column()
  password: string;

  @Index()
  @Column({ length: 255, nullable: true })
  phone: string;

  @Column({ type: 'int', nullable: true })
  otp: number;

  @Column({ type: 'timestamp', nullable: true })
  otp_expires_at: Date;

  @Column({ length: 255, nullable: true })
  dob: string;

  @Column({ length: 255, nullable: true })
  gender: string;

  @Column({ default: 'user' }) // Roles: 'user', 'admin'
  role: string;

  @Column({ length: 255, nullable: true })
  image: string;

  @Column({ type: 'tinyint', default: 1 })
  isActive: boolean;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  doctor_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

