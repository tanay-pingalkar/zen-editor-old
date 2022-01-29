import { Icon } from "./icon";
import terminal from "../svgs/terminal.svg?raw";

export class Terminal extends Icon {
  constructor(public toggle: HTMLDivElement) {
    super(terminal);
  }
}
