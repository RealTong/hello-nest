import {BaseExceptionFilter} from "@nestjs/core";
import {ArgumentsHost, Catch} from "@nestjs/common";

// 扩展内置的全局过滤器 继承BaseExceptionFilter
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}