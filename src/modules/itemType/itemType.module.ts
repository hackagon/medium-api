import { EntityRepository, Repository } from 'typeorm';
import { ItemType } from './itemType.entity';

@EntityRepository()
export class ItemTypeRepository extends Repository<ItemType> {

}
