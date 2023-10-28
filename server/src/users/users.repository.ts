import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const { username, email, password, name, cpf, birthday, gender, address } =
      data;

    const { street, number, zipCode, complement, neighborhood, city, state } =
      address;

    await this.prisma.user.create({
      data: {
        username,
        email,
        password,
        Profile: {
          create: {
            name,
            cpf,
            birthday,
            gender,
            addresses: {
              create: {
                number,
                street,
                zipCode,
                complement,
                neighborhood: {
                  create: {
                    name: neighborhood,
                    city: {
                      create: {
                        name: city,
                        state: { create: { name: state } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
