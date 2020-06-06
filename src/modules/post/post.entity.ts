import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate, UpdateDateColumn, ManyToOne } from 'typeorm';
import * as _ from "lodash";
import { User } from '../user/user.entity';
import { PostStatus } from './post.interface';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "name"
  })
  name: string;

  @Column({
    name: "user_id"
  })
  userId: number;

  @Column({
    name: "image_url"
  })
  imageUrl: string;

  @Column({
    name: "status",
    default: PostStatus.DRAFT
  })
  status: PostStatus;


  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at"
  })
  public updatedAt: number;

  // relation
  @ManyToOne(type => User, user => user.posts)
  user: User;

  constructor(partial: Partial<Post>) {
    super();
    _.assign(this, partial);
  }
}