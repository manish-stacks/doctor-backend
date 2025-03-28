/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,

  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ nullable: true })
  categoryId: string;

  @Column({ nullable: true })
  treatmentId: string;

  @Column({ nullable: true })
  expertiseId: string;


  
  @Column({ type: 'varchar', nullable: true })
  hospitalId: number;


  @Column({ type: 'bigint', unsigned: true })
  userId: number;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'text', nullable: true })
  desc: string;

  @Column({ type: 'text', nullable: true })
  education: string;

  @Column({ type: 'text', nullable: true })
  certificate: string;

  @Column({ type: 'varchar', nullable: true })
  appointmentFees: string;

  @Column({ type: 'varchar', nullable: true })
  experience: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  timeSlot: string;

  @Column({ type: 'varchar', length: 100 })
  dob: string;

  @Column({ type: 'varchar', length: 50 })
  gender: string;

  // @Column({ type: 'varchar', nullable: true })
  // startTime: string;

  // @Column({ type: 'varchar', nullable: true })
  // endTime: string;

  @Column({ type: 'text' })
  since: string;

  @Column({ type: 'tinyint' })
  isActive: number;

  @Column({ type: 'int', nullable: true })
  subscriptionStatus: number;

  @Column({ type: 'int', default: 0 })
  isPopular: number;

  @Column({ type: 'int', nullable: true })
  customTimeSlot: number;

  @Column({ type: 'tinyint', default: 0 })
  patientVideoCall: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
