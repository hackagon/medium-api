import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../modules/user/user.entity";
import { IsUniqueEmail } from "./isUnique.decorator";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [IsUniqueEmail]
})
export class ValidatorModule { }