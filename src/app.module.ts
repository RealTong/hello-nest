import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {CatsModule} from "./cats/cats.module";
import {DatabaseModule} from "./database/database.module";
import {UserEntity} from "./user/entities/user.entity";
import {LoggerMiddleware} from "./logger/logger.middleware";

@Module({
  imports: [CatsModule, DatabaseModule.forRoot([UserEntity])],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes({
      path:"cats",
      method: RequestMethod.GET
    })
  }
}
