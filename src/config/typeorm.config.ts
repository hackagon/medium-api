import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  password: "hackagon",
  database: "medium",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true
}