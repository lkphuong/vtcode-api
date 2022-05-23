import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @CreateDateColumn()
  create_at: Date;

  @Column()
  create_by: string;

  @UpdateDateColumn()
  update_at: Date;

  @Column()
  update_by: string;
}
