import {Controller, Get, Post, Body, Res,HttpStatus} from "@nestjs/common";
import {Response} from "express";
import {CatsService} from "./cats.service";

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller("cats")
export class CatsController {
  constructor(private catsService:CatsService) {}


  @Post()
  async createCat(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    res.status(HttpStatus.OK).json(this.catsService.create(createCatDto));
  }

  @Get()
  async findAll(@Res() res:Response){
    await res.status(HttpStatus.OK).json(this.catsService.findAll());
  }
}