import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { Address } from '../interfaces/address.interface';

export class CreateAddressDto implements Address {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'O campo Rua excedeu o limite de caracteres!' })
  street: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(7, { message: 'O campo Número excedeu o limite de caracteres!' })
  number: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(8, 8, { message: 'O campo CEP deve ter 8 caracteres numéricos.' })
  zipCode: string;

  @IsString()
  @MaxLength(50, {
    message: 'O campo Complemento excedeu o limite de caracteres!',
  })
  complement: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'O campo Bairro excedeu o limite de caracteres!' })
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'O campo Cidade excedeu o limite de caracteres!' })
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: 'O campo Estado excedeu o limite de caracteres!' })
  state: string;
}
