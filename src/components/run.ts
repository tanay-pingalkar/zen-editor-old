import { Icon } from "./icon";
import run from "../svgs/run.svg?raw";

export class Run extends Icon {
  constructor(public toggle: HTMLDivElement) {
    super(run);
  }
}
