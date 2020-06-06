import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDTO } from './story.dto';
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
  }
}