import { CreateUserDTO } from "./user.dto";


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
