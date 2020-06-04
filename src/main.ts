import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException, UnprocessableEntityException, ArgumentMetadata } from "@nestjs/common";
import { ValidationError, useContainer } from 'class-validator';

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

  console.log(`====================== App is running on port ${5000} ======================`)
  await app.listen(5000);
}
bootstrap();
