import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate, UpdateDateColumn, ManyToOne, BeforeInsert, JoinColumn } from 'typeorm';
import * as _ from "lodash";
import { User } from '../user/user.entity';
import { StoryStatus } from './story.interface';
import { cleanAccents } from "../../utils/handleString";

@Entity()
export class Story extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "title"
  })
  title: string;

  @ManyToOne(type => User, user => user.stories)
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
    default: StoryStatus.DRAFT
  })
  status: StoryStatus;

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
  public updatedAt: number;

  // relation
  // @ManyToOne(type => User, user => user.stories)
  // user: User;

  // hook
  @BeforeInsert()
  @BeforeUpdate()
  generateSlugFromName() {
    this.slug = _.chain(this.title)
      .thru(cleanAccents)
      .toLower()
      .split(" ")
      .concat(Date.now().toString())
      .join("-")
      .value()
  }

  constructor(partial: Partial<Story>) {
    super();
    _.assign(this, partial);
  }
}