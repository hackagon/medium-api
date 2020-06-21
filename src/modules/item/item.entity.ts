import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import * as _ from "lodash";
import { Story } from '../story/story.entity';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: "id"
  })
  id: number;

  @ManyToOne(type => Story, story => story.items)
  @JoinColumn({
    name: "story_id"
  })
  storyId: number;

  @Column({
    name: "item_type_id"
  })
  itemTypeId: number;

  @Column({
    name: "content"
  })
  content: string;

  @Column({
    name: "display_index"
  })
  displayIndex: number;

  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at"
  })
  updatedAt: Date;

  // relation


  constructor(partial: Partial<Item>) {
    super();
    _.assign(this, partial);
  }
}
