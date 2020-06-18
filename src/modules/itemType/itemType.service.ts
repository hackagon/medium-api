import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemTypeRepository } from "./itemType.module";
import { ItemType } from "./itemType.entity";

@Injectable()
export class ItemTypeService {
  constructor(
    @InjectRepository(ItemTypeRepository) private itemTypeRepository: ItemTypeRepository
  ) { }

  async getItemTypes(): Promise<ItemType[]> {
    return await this.itemTypeRepository.find()
  }

  async getItemTypeById(id: number): Promise<ItemType> {
    return await this.itemTypeRepository.findOne(id)
  }
}