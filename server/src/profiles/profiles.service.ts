import { Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ProfilesService {
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
}
