import { Module } from '@nestjs/common';
import { ItemTypeService } from './itemType.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeRepository } from './itemType.repository';
import { ItemTypeController } from './itemType.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemTypeRepository])
  ],
  controllers: [ItemTypeController],
  providers: [ItemTypeService],
})
export class ItemTypeModule { };