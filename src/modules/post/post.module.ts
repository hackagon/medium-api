import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from './user.repository';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([])
  ],
  controllers: [],
  providers: []
})
export class PostModule { }
