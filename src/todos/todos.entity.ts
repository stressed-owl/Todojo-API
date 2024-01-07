import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  description: string;

  @Column({
    default: 'Upcoming',
  })
  status: string;

  @Column()
  date: string;
}
