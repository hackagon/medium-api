import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { UserRepository } from '../modules/user/user.repository';

import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueEmail implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) { }
  async validate(email: any, args: ValidationArguments) {
    return this.userRepository.findOne({ email }).then(user => {
      if (user) return false;
      return true;
    });
  }
}