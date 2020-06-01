export interface User extends UserDTO {
  id: number;
  email: string;
  password: string;
  fullName: string;
}

export class UserDTO {
  email: string;
  password: string;
  fullName: string;
}

export interface Credentials {
  email: string;
  password: string;
}