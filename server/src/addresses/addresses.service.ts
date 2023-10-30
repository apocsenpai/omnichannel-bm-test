import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ViaCep } from './interfaces/viaCep.interface';

@Injectable()
export class AddressesService {
  constructor(private readonly httpService: HttpService) {}

  async throwIfCepIsNotValid(zipCode: string) {
    const zipCodeFormatted = zipCode.replace('-', '');

    const data = (
      await this.httpService.axiosRef.get(
        `https://viacep.com.br/ws/${zipCodeFormatted}/json/`,
      )
    ).data as ViaCep;

    if (data.erro)
      throw new NotFoundException('O CEP inserido não foi encontrado!');
  }
}
