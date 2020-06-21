import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemRepository } from '../item/item.repository';
import { StoryRepository } from '../story/story.repository';
import { Item } from "../item/item.entity";
import { CreateItemDTO, UpdateItemDTO } from '../item/item.dto';
import { ItemService } from '../item/item.service';

@Injectable()
export class StoryItemService {
  constructor(
    @InjectRepository(ItemRepository) private itemRepository: ItemRepository,
    private itemService: ItemService
  ) { }

  async getItemViaStory(storyId: number, itemId: number): Promise<Item> {
    return await this.itemService.getItemById(itemId);
  }

  async getItemsViaStory(storyId: number): Promise<Item[]> {
    const items = this.itemRepository.find({ storyId });
    return items;
  }

  async createItemViaStory(storyId: number, data: CreateItemDTO): Promise<Item> {
    return await this.itemService.createItem({
      ...data, storyId
    })
  }

  async updateItemViaStory(storyId: number, itemId: number, data: UpdateItemDTO): Promise<Item> {
    return await this.itemService.updateItemById(itemId, data);
  }

  async deleteItemViaStory(storyId: number, itemId: number): Promise<Item> {
    return await this.itemService.deleteItemById(itemId);
  }
}