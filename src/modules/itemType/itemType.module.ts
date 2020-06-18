import { Module } from '@nestjs/common';
import { ItemTypeService } from './itemType.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeRepository } from './itemType.repository';
// import { ItemTypeController } from './.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemTypeRepository])
  ],
  controllers: [],
  providers: [ItemTypeService],
})
export class ItemTypeModule { };