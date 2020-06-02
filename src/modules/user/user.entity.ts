import { Entity, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "email",
    nullable: false
  })
  email: string;

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
}