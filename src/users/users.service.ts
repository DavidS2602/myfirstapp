import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John',
      phone: '0123456789',
    },
    {
      id: 2,
      name: 'Marco',
      phone: '5513043583',
    },
  ];
  getUsers() {
    return this.users;
  }

  createUsers(user:CreateUserDto) {
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
