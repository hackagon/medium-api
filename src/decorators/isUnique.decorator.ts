import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../modules/user/user.repository';

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueEmail implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  async validate(email: any, args: ValidationArguments) {
    return this.userRepository.findOne({ email }).then(user => {
      if (user) return false;
      return true;
    });
  }
}
