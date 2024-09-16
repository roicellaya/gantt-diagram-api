import { Injectable } from '@nestjs/common';

export type User = { userId: number; username: string; password: string };

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john@gmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria@gmail.com',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
