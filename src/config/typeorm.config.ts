import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "afs-medium.cefv5ijogza1.us-east-2.rds.amazonaws.com" || "localhost",
  port: 3306,
  username: "admin" || "root",
  password: "admin123" || "hackagon",
  database: "medium",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true
}