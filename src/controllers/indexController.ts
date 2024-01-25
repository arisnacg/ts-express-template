import { Controller, Get, Params, QueryParams } from "routing-controllers";
import { IndexParams } from "@dto/common";
import { PostbackRepository } from "@repositories/postbackRepository";

@Controller("/")
export default class IndexController {
  repo = new PostbackRepository();

  @Get("/")
  async index(@QueryParams() params: IndexParams) {
    console.log(params);
    return this.repo.hello(params);
  }
}
