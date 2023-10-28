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
  @IsString({
    message: 'O campo Nome de usuário não possui caracteres válidos!',
  })
  @IsNotEmpty({ message: 'O campo Nome de usuário é obrigatório!' })
  @MaxLength(50, { message: 'Nome de usuário excedeu o limite de caracteres.' })
  username: string;

  @IsString({ message: 'O campo Email não possui caracteres válidos!' })
  @IsEmail()
  @IsNotEmpty({ message: 'O campo Email é obrigatório!' })
  @MaxLength(80, {
    message: 'O campo Email excedeu o limite de caracteres.',
  })
  email: string;

  @IsString()
  @IsStrongPassword(
    {
      minLength: 6,
    },
    { message: 'A senha não é forte o suficiente!' },
  )
  @IsNotEmpty({ message: 'O campo Senha é obrigatório!' })
  password: string;

  @IsString({ message: 'O campo Nome não possui caracteres válidos!' })
  @IsNotEmpty({ message: 'O campo Nome é obrigatório!' })
  @MaxLength(80, {
    message: 'O campo Nome excedeu o limite de caracteres.',
  })
  name: string;

  @IsNumberString({}, { message: 'O campo CPF deve possuir apenas números!' })
  @IsNotEmpty({ message: 'O campo CPF é obrigatório!' })
  @Length(11, 11, { message: 'O campo CPF deve ter 11 caracteres numéricos.' })
  cpf: string;

  @IsDateString(
    {},
    { message: 'O campo Data de nascimento não possui caracteres válidos!' },
  )
  @IsNotEmpty({ message: 'O campo Data de nascimento é obrigatório!' })
  birthday: Date;

  @IsEnum(Gender, { message: 'Opção selecionada não está disponível!' })
  gender: Gender;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
