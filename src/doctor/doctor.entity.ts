import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;
    
    @Index()
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    treatment_id: number;

    @Index()
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    categoryId: number;

    @Index()
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    expertiseId: number;

    @Index()
    @Column({ type: 'varchar', length: 255, nullable: true })
    hospitalId: string;

    @Index()
    @Column({ type: 'bigint', unsigned: true })
    userId: number;

    @Column({ type: 'varchar', length: 255 })
    image: string;

    @Column({ type: 'text', nullable: true })
    desc: string;

    @Column({ type: 'text', nullable: true })
    education: string;

    @Column({ type: 'text', nullable: true })
    certificate: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    appointmentFees: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    experience: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    timeSlot: string;

    @Column({ type: 'varchar', length: 255 })
    dob: string;

    @Column({ type: 'varchar', length: 255 })
    gender: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    startTime: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    endTime: string;

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
    patient_vcall: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
