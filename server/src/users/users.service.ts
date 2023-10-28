import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { HttpService } from '@nestjs/axios';
import { ViaCep } from './interfaces/viaCep.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly httpService: HttpService,
  ) {}

  async create(data: CreateUserDto) {
    const birthdayIso = new Date(data.birthday);

    this.throwIfUserIsNotAdult(birthdayIso);

    await this.throwIfCepIsNotValid(data.address.zipCode);

    await this.throwIfUserAlreadyExists({
      cpf: data.cpf,
      email: data.email,
      username: data.username,
    });

    const createBody = {
      ...data,
      birthday: birthdayIso,
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

  async throwIfCepIsNotValid(zipCode: string) {
    const data = (
      await this.httpService.axiosRef.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      )
    ).data as ViaCep;

    if (data.erro)
      throw new NotFoundException('O CEP inserido não foi encontrado!');
  }

  async throwIfUserAlreadyExists(data: {
    cpf: string;
    email: string;
    username: string;
  }) {
    const user = await this.userRepository.findByCredentials(data);

    if (user)
      throw new ConflictException('Usuário já cadastrado na plataforma!');
  }
}
