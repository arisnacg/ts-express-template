import { IndexType } from "@/types/common";

export class PostbackRepository {
  async hello(indexType: IndexType) {
    return `hello ${indexType.name ? indexType.name : "world"}`;
  }
}
