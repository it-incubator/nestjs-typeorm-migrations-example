import { Controller, Get } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './modules/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('users')
export class AppController {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  @Get('get')
  getUsers() {
    return this.repo.find();
  }

  @Get('create')
  createUser() {
    const user = new User();
    user.firstName = 'Dimych';
    user.lastName = 'Kuzyuberdin';

    return this.repo.save(user);
  }
}
