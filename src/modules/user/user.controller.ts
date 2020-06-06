import { Controller, Get, Query, Delete, Param, ParseIntPipe, Post, Body, Patch, Put, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { CreateUserDTO, UpdateUserDTO, ReplaceUserDTO } from "./user.dto";

@Controller("users")
export class UserController {
  constructor(
    private userService: UserService
  ) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(":id")
  getUserById(@Param("id") id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  createUser(@Body() userDTO: CreateUserDTO): Promise<User> {
    return this.userService.createUser(userDTO);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(":id")
  updateUserById(@Param("id") id: number, @Body() userDTO: Partial<UpdateUserDTO>): Promise<User> {
    return this.userService.updateUserById(id, userDTO);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(":id")
  replaceUserById(@Param("id") id: number, @Body() userDTO: ReplaceUserDTO): Promise<User> {
    return this.userService.replaceUserById(id, userDTO);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(":id")
  deleteUserById(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.userService.deleteUserById(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id/stories")
  getUserByIdIncludingStories(@Param("id") id: number): Promise<User> {
    return this.userService.getUserByIdIncludingStories(id);
  }
}