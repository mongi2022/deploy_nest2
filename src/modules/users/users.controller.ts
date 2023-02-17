import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private configService: ConfigService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @UseGuards(AccessTokenGuard)
  @Get()
  findAll() {

    const allUsers = this.usersService.findAllUsers();
    return allUsers
  }

  @Get(':id')
 async findById(@Param('id') id: number) {
    const user= await this.usersService.findUserById(id);
   const {password,...result}=user
    return result
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
 async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    await this.usersService.updateUser(id, updateUserDto);
    const user = await this.usersService.findUserById(id)
   const  {password,...result}=user
   return result
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.removeUser(id);
  }

}
