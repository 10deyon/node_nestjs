import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/CreateUser.dto';
import { SerializedUser, User } from '../../types/User';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';
// import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [];

  // getUsers() {
  //   return this.users.map((user) => plainToClass(SerializedUser, user));
  // }

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => {
      return user.username === username;
    });
  }

  getUserById(id: number) {
    return this.users.find((user) => {
      return user.id === id;
    });
  }

  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
