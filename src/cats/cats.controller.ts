import {Controller, Get, Post, Body, Res, HttpStatus, HttpException, UseFilters} from "@nestjs/common";
import {Response} from "express";
import {CatsService} from "./cats.service";
import {ForbiddenException} from "../exception/forbidden.exception";
import {HttpExceptionFilter} from "../filter/http-exception.filter";

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
  // @UseFilters(new HttpExceptionFilter()) // 仅作用于当前控制器
  async findAll(@Res() res:Response){
    throw new ForbiddenException();
  }
}