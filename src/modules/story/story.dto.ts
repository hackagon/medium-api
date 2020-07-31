import { IsNotEmpty, IsEmpty } from 'class-validator';

// Create
export class CreateStoryDTO {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  title: string;

  imageUrl: string;
}

// Update
export class UpdateStoryDTO {
  @IsNotEmpty()
  title: string;

  imageUrl: string;
}

// Replace
export class ReplaceStoryDTO {
  @IsEmpty()
  userId: number;

  @IsNotEmpty()
  title: string;

  imageUrl: string;
}
