import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { StoryRepository } from './story.repository';
import { Story } from "./story.entity";
import { CreateStoryDTO } from './story.dto';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(StoryRepository) private storyRepository: StoryRepository
  ) { }

  async getStories(): Promise<Story[]> {
    return await this.storyRepository.find();
  }

  async getStoryById(id: number): Promise<Story> {
    const foundStory = await this.storyRepository.findOne(id);
    if (!foundStory) throw new NotFoundException("Story not found")

    return foundStory;
  }

  async createStory(storyDTO: CreateStoryDTO): Promise<Story> {
    const newStory = this.storyRepository.create(storyDTO);
    return await newStory.save()
  }
}