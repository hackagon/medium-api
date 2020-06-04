// import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { UserRepository } from '../modules/user/user.repository';
// import { Repository, EntityManager } from 'typeorm';
// import { Injectable } from '@nestjs/common';

// export function isUnique(validationOptions?: ValidationOptions) {
//   return (object: any, propertyName: string) => {
//     registerDecorator({
//       target: object.constructor,
//       propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: IsUniqueConstraint,
//     });
//   };
// }

// @ValidatorConstraint({ name: 'isUnique', async: true })
// @Injectable()
// export class IsUniqueConstraint implements ValidatorConstraintInterface {
//   constructor(
//     @InjectRepository(UserRepository) private userRepository: UserRepository,
//   ) {

//   }

//   async validate(email: string, args: string) {
//     console.log("args: ", args);
//     const foundUser = await this.userRepository.findOne({ email })
//     if (foundUser) return false;
//     return true
//   }
// }

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

// export function isUnique(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: IsUniqueEmail
//     });
//   };
// }