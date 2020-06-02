import { Injectable, Body, NotFoundException, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import { CreateUserDTO, UpdateUserDTO, ReplaceUserDTO } from "./user.dto";
import _ from "lodash";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) { }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    const foundUser = await this.userRepository.findOne(id);
    if (!foundUser) throw new NotFoundException("User not found");

    return foundUser;
  }

  async createUser(@Body() userDTO: CreateUserDTO): Promise<User> {
    const foundUser = await this.userRepository.findOne({ email: userDTO.email });
    if (foundUser) throw new BadRequestException("Email exist");

    const newUser = this.userRepository.create(userDTO);
    return await newUser.save();
  }

  async updateUserById(id: number, userDTO: Partial<UpdateUserDTO>): Promise<User> {
    let foundUser = await this.getUserById(id);

    foundUser = Object.assign(foundUser, userDTO, {})
    await foundUser.save();

    return foundUser;
  }

  async replaceUserById(id: number, userDTO: ReplaceUserDTO): Promise<User> {
    let foundUser = await this.getUserById(id);
    _.chain(userDTO)
      .keys()
      .forEach(attr => foundUser[attr] = userDTO[attr])

    await foundUser.save();
    return foundUser;
  }

  async deleteUserById(id: number): Promise<User> {
    let foundUser = await this.getUserById(id);

    await this.userRepository.delete(id);
    return foundUser;
  }
}