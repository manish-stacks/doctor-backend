import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  author: string;

  @Column({ default: false })
  isPublished: boolean;
  
  // @ManyToOne(() => User, (user) => user.id)
  // author: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
