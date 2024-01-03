import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vacancy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  job: string;

  @Column()
  city: string;

  @Column({
    type: "text"
  })
  responsibilities: string;

  @Column({
    type: "text"
  })
  requirements: string;

  @Column({
    default: ''
  })
  position?: string;
}
