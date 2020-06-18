import { EntityRepository, Repository } from 'typeorm';
import { ItemType } from './itemType.entity';

@EntityRepository(ItemType)
export class ItemTypeRepository extends Repository<ItemType> {

}
