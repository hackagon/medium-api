import { Injectable, Body, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import { UserDTO } from "./interface";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) { }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(@Body() userDTO: UserDTO): Promise<User> {
    const newUser = this.userRepository.create(userDTO);
    return await newUser.save();
  }

  async updateUser(id: number, userDTO: Omit<UserDTO, "email" | "password">): Promise<User> {
    let foundUser = await this.userRepository.findOne(id);
    if (!foundUser) throw new NotFoundException("User not found");

    foundUser = Object.assign(foundUser, userDTO, userDTO, {})
    await foundUser.save();

    return foundUser;
  }

  async deleteUser(id: number): Promise<User> {
    const foundUser = await this.userRepository.findOne(id);
    if (!foundUser) throw new NotFoundException("User not found");

    await this.userRepository.delete(id);
    return foundUser;
  }
}