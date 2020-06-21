import { Controller, Get, Param, Post, Put, Patch, Delete, Body } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { StoryService } from '../story/story.service';
import { Item } from "../item/item.entity";
import { CreateItemDTO } from '../item/item.dto';
import { StoryItemService } from './story-item.service';

@Controller("stories/:storyId/items")
export class StoryItemController {
  constructor(
    private itemService: ItemService,
    private storyService: StoryService,
    private storyItemService: StoryItemService
  ) { }

  @Get()
  async getItemsViaStory(@Param("storyId") storyId: number): Promise<Item[]> {
    return await this.storyItemService.getItemsViaStory(storyId);
  }

  @Post()
  async createItemViaStory(@Param("storyId") storyId: number, @Body() data: CreateItemDTO): Promise<Item> {
    return await this.storyItemService.createItemViaStory(storyId, data);
  }

  @Patch(":itemId")
  async updateItemByItemIdViaStory(@Param("storyId") storyId: number, @Param("itemId") itemId: number, @Body() data: CreateItemDTO): Promise<Item> {
    return await this.storyItemService.updateItemViaStory(storyId, itemId, data);
  }

  @Delete(":itemId")
  async deleteItemByItemIdViaStory(@Param("storyId") storyId: number, @Param("itemId") itemId: number): Promise<Item> {
    return await this.storyItemService.deleteItemViaStory(storyId, itemId);
  }
}