export class CreateItemDTO {
  storyId: number;
  itemTypeId: number;
  content: string;
}

export class UpdateItemDTO {
  content: string;
}