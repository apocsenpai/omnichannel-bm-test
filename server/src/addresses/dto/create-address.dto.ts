import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { Address } from '../interfaces/address.interface';

export class CreateAddressDto implements Address {
  @IsString({ message: 'O campo Rua não possui caracteres válidos!' })
  @IsNotEmpty({ message: 'O campo Rua é obrigatório!' })
  @MaxLength(50, { message: 'O campo Rua excedeu o limite de caracteres!' })
  street: string;

  @IsString({ message: 'O campo Número não possui caracteres válidos!' })
  @IsNotEmpty({ message: 'O campo Número é obrigatório!' })
  @MaxLength(7, { message: 'O campo Número excedeu o limite de caracteres!' })
  number: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'O campo CEP é obrigatório!' })
  @Length(8, 8, { message: 'O campo CEP deve ter 8 caracteres numéricos.' })
  zipCode: string;

  @IsString({ message: 'O campo Complemento não possui caracteres válidos!' })
  @MaxLength(50, {
    message: 'O campo Complemento excedeu o limite de caracteres!',
  })
  complement: string;

  @IsString({ message: 'O campo Bairro não possui caracteres válidos!' })
  @IsNotEmpty({ message: 'O campo Bairro é obrigatório!' })
  @MaxLength(50, { message: 'O campo Bairro excedeu o limite de caracteres!' })
  neighborhood: string;

  @IsString({ message: 'O campo Cidade não possui caracteres válidos!' })
  @IsNotEmpty({ message: 'O campo Cidade é obrigatório!' })
  @MaxLength(50, { message: 'O campo Cidade excedeu o limite de caracteres!' })
  city: string;

  @IsString({ message: 'O campo Estado não possui caracteres válidos!' })
  @IsNotEmpty({ message: 'O campo Estado é obrigatório!' })
  @MaxLength(30, { message: 'O campo Estado excedeu o limite de caracteres!' })
  state: string;
}
