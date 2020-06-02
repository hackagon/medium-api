import { IsEmail, IsNotEmpty, Matches } from "class-validator";

// DTO
export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Matches(this.password, { message: "Confirm password should match password" })
  password2: string;

  @IsNotEmpty()
  fullName: string;
}

export class UpdateUserDTO {
  @IsNotEmpty()
  fullName: string;
}

// interface
export interface User extends CreateUserDTO {
  id: number;
  email: string;
  password: string;
  fullName: string;
}


export interface Credentials {
  email: string;
  password: string;
}
