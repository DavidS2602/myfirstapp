import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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
}
