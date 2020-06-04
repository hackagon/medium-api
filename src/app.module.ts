import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { ValidatorModule } from './decorator/validator.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    PostModule,
    ValidatorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
