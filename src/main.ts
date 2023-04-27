import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import "reflect-metadata";
import {HttpExceptionFilter} from "./filter/http-exception.filter";
import {AllExceptionsFilter} from "./filter/all-exceptions.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 作用全局
  app.useGlobalFilters(new HttpExceptionFilter())

  // 自定义全局过滤器 ①
  const {httpAdapter} = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  await app.listen(3000);
}

bootstrap();
