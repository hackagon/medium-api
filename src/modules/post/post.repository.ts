import { EntityRepository, Repository } from 'typeorm';
import { Post } from './post.entity';

@EntityRepository()
export class PostRepository extends Repository<Post> {

}
