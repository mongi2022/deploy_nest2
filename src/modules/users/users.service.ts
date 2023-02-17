import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser =  this.userRepository.create(createUserDto);
    return this.userRepository.save(createUserDto);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUserById(id: number): Promise<User> {
    return this.userRepository.findOne({where:{id}});
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where:{email} });
  }

  async updateUser(
    id: number,
    updateUserDto:Partial<UpdateUserDto>){
    return this.userRepository.update(id, updateUserDto)
  }

  async removeUser(id: number){
    return this.userRepository.delete(id);
  }
}
