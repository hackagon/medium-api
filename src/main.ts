import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException, UnprocessableEntityException, ArgumentMetadata } from "@nestjs/common";
import { ValidationError, useContainer } from 'class-validator';

export class ValidationPipe422 extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata)
    } catch (e) {
      if (e instanceof BadRequestException) {
        console.log(e)
        throw new UnprocessableEntityException(e)
      }
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
      validationError: {
        target: false
      }
    }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(5000);
}
bootstrap();
