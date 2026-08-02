import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  @Get('all')
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'Zeeshan' },
      { id: 2, name: 'Ali' },
      { id: 3, name: 'Ahmed' },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return users;
  }
  @Get('all/:id')
  getUsersById(@Param('id') id: number) {
    return { id, name: 'ali' };
  }
  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return { data: createUserDto, message: 'user created successfully' };
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: { id, ...updateUserDto },
      message: 'user updated successfully',
    };
  }
}
