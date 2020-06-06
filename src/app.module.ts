import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { StoryModule } from './modules/story/story.module';
import { ValidatorModule } from './decorators/validator.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    StoryModule,
    ValidatorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
