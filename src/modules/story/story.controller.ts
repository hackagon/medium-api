import { Controller, Get, Param, Body, Post, Patch, Put, Delete } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDTO, UpdateStoryDTO, ReplaceStoryDTO } from './story.dto';
import { Story } from './story.entity';

@Controller('stories')
export class StoryController {
  constructor(
    private storyService: StoryService
  ) { }

  @Get()
  getStories(): Promise<Story[]> {
    return this.storyService.getStories();
  }

  @Get(":id")
  getStoryById(@Param("id") id: number): Promise<Story> {
    return this.storyService.getStoryById(id);
  };

  @Post()
  createStory(@Body() storyDTO: CreateStoryDTO): Promise<Story> {
    return this.storyService.createStory(storyDTO);
  };

  @Put(":id")
  replaceStoryById(@Param("id") id: number, storyDRO: ReplaceStoryDTO) {
    return this.replaceStoryById(id, storyDRO);
  }

  @Patch(":id")
  updateStoryById(@Param("id") id: number, storyDRO: UpdateStoryDTO) {
    return this.storyService.updateStoryById(id, storyDRO);
  }

  @Delete(":id")
  deleteStoryById(@Param("id") id: number) {
    return this.storyService.deleteStoryById(id);
  }
}