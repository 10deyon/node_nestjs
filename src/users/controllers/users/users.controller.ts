import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { SerializedUser } from '../../types/User';
import { UserNotFoundException } from '../../exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from '../../filters/HttpException.filter';
import { CreateUserDto } from '../../dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    console.log(user);

    if (user) {
      return new SerializedUser(user);
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    if (user) return new SerializedUser(user);
    throw new UserNotFoundException();
    // throw new HttpException('User not found');
    // throw new HttpException('User not found', 500);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
