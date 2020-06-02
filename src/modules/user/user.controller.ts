import { Controller, Get, Query, Delete, Param, ParseIntPipe, Post, Body, Patch } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { CreateUserDTO, UpdateUserDTO } from "./interface";

@Controller("users")
export class UserController {
  constructor(
    private userService: UserService
  ) { }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() userDTO: CreateUserDTO): Promise<User> {
    return this.userService.createUser(userDTO);
  }

  @Patch(":id")
  updateUser(@Param("id") id: number, @Body() userDTO: Partial<UpdateUserDTO>): Promise<User> {
    return this.userService.updateUserById(id, userDTO);
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.userService.deleteUserById(id);
  }
}