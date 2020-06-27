import { Entity, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Exclude } from 'class-transformer';
import * as _ from 'lodash';
import { Story } from '../story/story.entity';
import { Series } from '../series/series.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "email",
    nullable: false
  })
  email: string;

  @Exclude()
  @Column({
    name: "password",
    nullable: false
  })
  password: string;

  @Column({
    name: "full_name",
    nullable: false
  })
  fullName: string;

  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at"
  })
  public updatedAt: number;

  // relation
  @OneToMany(type => Series, series => series.userId, {
    cascade: ["insert", "update", "remove"],
  })
  series: Series[]

  @OneToMany(type => Story, story => story.userId, {
    cascade: ["insert", "update", "remove"],
  })
  stories: Story[]

  constructor(partial: Partial<User>) {
    super();
    _.assign(this, partial);
  }
}