import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";

export class IndexParams {
  @IsOptional()
  public name?: string;
}
