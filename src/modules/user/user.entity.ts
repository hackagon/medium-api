import { Entity, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { NotImplementedException } from "@nestjs/common";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  email: string;

  @Column({
    nullable: false
  })
  password: string;

  @Column({
    name: "full_name",
    nullable: false
  })
  fullName: string;
}