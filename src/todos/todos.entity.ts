import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @Column()
  date: string;

  @Column({
    default: false,
  })
  completed: boolean;
}
