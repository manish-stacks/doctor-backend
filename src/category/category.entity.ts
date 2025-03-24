import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ length: 150 })
    name: string;

    @Column()
    image: string;

    @Column({ type: 'bigint', unsigned: true })
    treatmentId: number;

    @Column({ type: 'tinyint', default: 1 })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
