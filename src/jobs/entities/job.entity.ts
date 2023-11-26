import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  url: string;

  @Column()
  company: string;

  @Column()
  image_url: string;

  @Column()
  experience: string;

  @Column()
  doIApplied: boolean;

  @Column()
  JobAdditionalInfo: string;
}
