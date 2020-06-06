import { IsEmail, IsNotEmpty, Validate, IsEmpty } from "class-validator";
import { IsMatch } from "../../decorators/isMatch.decorator";
import { IsUniqueEmail } from "../../decorators/isUnique.decorator";

// Create
export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  @Validate(IsUniqueEmail, { message: "This email already exists" })
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsMatch("password", { message: "Confirm password should match" })
  password2: string;

  @IsNotEmpty()
  fullName: string;

  @IsEmpty()
  createdAt: Date;
}

// Update
export class UpdateUserDTO {
  @IsEmpty()
  email: string;

  @IsEmpty()
  password: string;

  fullName: string;

  @IsEmpty()
  createdAt: Date;
}

// Replace
export class ReplaceUserDTO {
  @IsEmpty()
  email: string;

  @IsEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;

  @IsEmpty()
  createdAt: Date;
}