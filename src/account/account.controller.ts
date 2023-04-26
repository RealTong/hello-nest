import {Controller, Get, HostParam} from "@nestjs/common";

@Controller({host: ":account.localhost"})
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
