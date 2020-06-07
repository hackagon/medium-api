import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { StoryRepository } from './story.repository';
import { Story } from "./story.entity";
import { CreateStoryDTO, ReplaceStoryDTO, UpdateStoryDTO } from './story.dto';
import * as _ from "lodash";

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

  async replaceStoryById(id: number, storyDTO: ReplaceStoryDTO): Promise<Story> {
    const foundStory = await this.getStoryById(id);

    _.chain(storyDTO)
      .keys()
      .value()
      .forEach(attr => foundStory[attr] = storyDTO[attr])

    await foundStory.save();
    return foundStory;
  }

  async updateStoryById(id: number, storyDTO: UpdateStoryDTO): Promise<Story> {
    let foundStory = await this.getStoryById(id);

    foundStory = _.assign(foundStory, storyDTO, {})
    await foundStory.save();

    return foundStory;
  }

  async deleteStoryById(id: number): Promise<Story> {
    let foundStory = await this.getStoryById(id);

    this.storyRepository.delete(id)
    return foundStory;
  }
}