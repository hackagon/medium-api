import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PostRepository } from './post.repository';
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository) private postRepository: PostRepository
  ) { }

  async getPosts(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getPostById(id: number): Promise<Post> {
    const foundPost = await this.postRepository.findOne(id);
    if (!foundPost) throw new NotFoundException("Post not found")

    return foundPost;
  }
}