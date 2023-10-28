import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AddressesModule } from './addresses/addresses.module';

@Module({
  imports: [PrismaModule, UsersModule, ProfilesModule, AddressesModule],
})
export class AppModule {}
