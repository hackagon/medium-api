import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { SeriesStatus } from './series.interface';
import { User } from '../user/user.entity';

@Entity()
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => User, user => user.series)
  @JoinColumn({
    name: "user_id"
  })
  userId: number;

  @Column({
    name: "image_url"
  })
  imageUrl: string;

  @Column({
    name: "status",
    default: SeriesStatus.DRAFT
  })
  status: SeriesStatus;

  @Column({
    name: "slug",
  })
  slug: string;

  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at"
  })
  updatedAt: Date;
}
