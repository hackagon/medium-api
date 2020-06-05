import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate, UpdateDateColumn } from 'typeorm';

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
    name: "status"
  })
  status: string;

  @Column({
    default: () => "NOW()",
    name: "created_at"
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at",
    nullable: true
  })
  public updatedAt: number;

  @BeforeUpdate()
  public setUpdatedAt() {
    console.log(Date.now())
    this.updatedAt = Math.floor(Date.now() / 1000);
  }
}