import { IsNotEmpty, IsEmpty } from "class-validator";

// Create
export class CreateStoryDTO {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  name: string;

  imageUrl: string;
}

// Update
export class UpdateStoryDTO {
  @IsNotEmpty()
  name: string;

  imageUrl: string;
}

// Replace
export class ReplaceStoryDTO {
  @IsNotEmpty()
  name: string;

  imageUrl: string;
}