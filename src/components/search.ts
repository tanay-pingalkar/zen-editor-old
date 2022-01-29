import { Icon } from "./icon";
import search from "../svgs/search.svg?raw";

export class Search extends Icon {
  constructor(public toggle: HTMLDivElement) {
    super(search);
  }
}
