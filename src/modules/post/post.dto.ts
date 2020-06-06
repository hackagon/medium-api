import { IsNotEmpty, IsEmpty } from "class-validator";

// Create
export class CreatePostDTO {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  name: string;

  imageUrl: string;
}

// Update
export class UpdatePostDTO {
  @IsNotEmpty()
  name: string;

  imageUrl: string;
}

// Replace
export class ReplacePostDTO {
  @IsNotEmpty()
  name: string;

  imageUrl: string;
}