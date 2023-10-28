import { Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsStrongPassword,
  Length,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'Nome de usuário excedeu o limite de caracteres.' })
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(80, {
    message: 'O campo Email excedeu o limite de caracteres.',
  })
  email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 6,
  })
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80, {
    message: 'O campo Nome excedeu o limite de caracteres.',
  })
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'O campo CPF deve ter 11 caracteres numéricos.' })
  cpf: string;

  @IsDateString()
  @IsNotEmpty()
  birthday: Date;

  @IsEnum(Gender)
  gender: Gender;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
