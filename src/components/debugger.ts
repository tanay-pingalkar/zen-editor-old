import { Icon } from "./icon";
import _debugger from "../svgs/debuger.svg?raw";

export class Debugger extends Icon {
  constructor(public toggle: HTMLDivElement) {
    super(_debugger);
  }
}
