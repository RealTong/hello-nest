import {Injectable} from "@nestjs/common";
import {Cat} from "./interfaces/cat.interface";

@Injectable()
export class CatsService{
    private readonly cats: Cat[] = []

  create(cat){
      this.cats.push(cat)
  }

  findAll(): any[]{
      this.cats.push({
        name:"TONG",
        age:18,
        breed:"Chinese to mao"
      })
      return this.cats
  }

}