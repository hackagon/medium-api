import { EntityRepository, Repository } from 'typeorm';
import { Story } from './story.entity';

@EntityRepository()
export class StoryRepository extends Repository<Story> {

}
