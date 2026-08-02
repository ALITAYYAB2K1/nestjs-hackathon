import { Controller, Get, Query } from '@nestjs/common';

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
}
