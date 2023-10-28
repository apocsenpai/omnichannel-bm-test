import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { AddressesService } from 'src/addresses/addresses.service';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { HttpModule } from '@nestjs/axios';
import { ProfilesService } from 'src/profiles/profiles.service';

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository,
    AddressesService,
    CreateAddressDto,
    ProfilesService,
  ],
})
export class UsersModule {}
