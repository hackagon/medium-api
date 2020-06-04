import { Entity, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { Exclude } from 'class-transformer';
import * as _ from 'lodash';

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

  @Column({
    default: () => "NOW()",
    name: "created_at"
  })
  createdAt: Date

  constructor(partial: Partial<User>) {
    super();
    _.assign(this, partial);
  }
}