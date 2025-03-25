import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Expertise {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column()
    name: string;
    @Index()
    @Column({ type: 'bigint', unsigned: true })
    categoryId: number;

    @Column({ type: 'tinyint', default: 1 })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}