import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: "id"
  })
  id: number;

  @Column({
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
}
