import {Controller, Get, Post, Body, Res,HttpStatus} from "@nestjs/common";
import {Response} from "express";

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller("cats")
export class CatsController {

  @Get()
  async findAll(@Res() res:Response){
    await res.status(HttpStatus.NOT_FOUND).json({
      message:"findAll not found",
    });
  }

  @Post()
  async createCat(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    await res.status(HttpStatus.OK).json([]);
  }
}