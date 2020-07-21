import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException, INestApplication } from '@nestjs/common';
import { ValidationError, useContainer } from 'class-validator';
import * as datasource from "./config/datasource.config.json";

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    logger: ["warn", "error"]
  })
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

  const port = process.env.PORT || 5000

  await app.listen(port, () => {
    console.log(`====================== Server is running ======================`)
    console.log(`Port: ${port}`)
    console.log(`Environment: ${process.env.NODE_ENV}`)
    console.log(`Database: ${datasource[process.env.NODE_ENV].host}`)
  });
}
bootstrap();
