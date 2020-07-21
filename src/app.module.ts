import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { StoryModule } from './modules/story/story.module';
import { ValidatorModule } from './decorators/validator.module';
import { ItemTypeModule } from './modules/itemType/itemType.module';
import { StoryItemModule } from './modules/story-item/story-item.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    StoryModule,
    StoryItemModule,
    ItemTypeModule,
    ValidatorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
