import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(data: CreateUserDto) {
    const birthdayIso = new Date(data.birthday);

    this.throwIfUserIsNotAdult(birthdayIso);

    const createBody = {
      ...data,
      birthday: new Date(birthdayIso),
      password: this.encryptPassword(data.password),
    };

    await this.userRepository.create(createBody);
  }

  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  throwIfUserIsNotAdult(birthday: Date) {
    if (!this.isAdult(birthday))
      throw new UnprocessableEntityException(
        'Proibido para menores de 18 anos.',
      );
  }

  isAdult(birthday: Date) {
    const eighteenYearsInMilliseconds = 18 * 365 * 24 * 60 * 60 * 1000;

    const todayInTimestamp = new Date().getTime();

    return todayInTimestamp - birthday.getTime() >= eighteenYearsInMilliseconds;
  }
}
