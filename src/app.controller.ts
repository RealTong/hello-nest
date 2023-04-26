import { Controller, Get,Post,Param,HttpCode,Header ,Query,Redirect} from '@nestjs/common';
import { AppService } from './app.service';

// @Controller({host:"wst.sh"})
@Controller("cat")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return 'Admin page';
  }

  @Get(":id")
  getHello(@Query("v") version, @Param("id") params): string {
    console.log(version)
    console.log(params);
    // if (version && version ==="5"){
      return this.appService.getHello();
    // }
  }

  @Post()
  @Header("Cache-Control", "111")
  @HttpCode(200)
  postCat():string{
    return "Post Cat";
  }
}
