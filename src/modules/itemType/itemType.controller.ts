import { Controller, Get } from '@nestjs/common';
import { ItemTypeService } from './itemType.service';
import { ItemType } from './itemType.entity';

@Controller('itemTypes')
export class ItemTypeController {
  constructor(
    private itemTypeService: ItemTypeService
  ) { }

  @Get()
  getItemTypes(): Promise<ItemType[]> {
    return this.itemTypeService.getItemTypes()
  }
}