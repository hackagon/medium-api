import { IsEmail, IsNotEmpty, Validate } from "class-validator";
import { IsMatch } from "src/decorator/IsMatch.decorator";
import { IsUniqueEmail } from "src/decorator/isUnique.decorator";

// Create
export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  @Validate(IsUniqueEmail, { message: "This email already exists" })
  email: string;

  @IsNotEmpty()
  password: string;

  @IsMatch("password", { message: "Confirm password should match" })
  password2: string;

  @IsNotEmpty()
  fullName: string;
}

// Update
export class UpdateUserDTO {
  fullName: string;
}

// Replace
export class ReplaceUserDTO {
  @IsNotEmpty()
  fullName: string;
}