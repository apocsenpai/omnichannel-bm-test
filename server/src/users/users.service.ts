import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { AddressesService } from 'src/addresses/addresses.service';
import { ProfilesService } from 'src/profiles/profiles.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly addressService: AddressesService,
    private readonly profileService: ProfilesService,
  ) {}

  async create(data: CreateUserDto) {
    const birthdayIso = new Date(data.birthday);

    this.profileService.throwIfUserIsNotAdult(birthdayIso);

    await this.addressService.throwIfCepIsNotValid(data.address.zipCode);

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
