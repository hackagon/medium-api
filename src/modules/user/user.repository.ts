import { User } from "./user.entity";
import { Story } from "../story/story.entity";
import { EntityRepository, Repository, getManager } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async findStories() {
    const entityManager = getManager();
    const stories = await entityManager.find(Story)
    return stories
  }
}