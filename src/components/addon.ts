import { Icon } from "./icon";
import addon from "../svgs/addon.svg?raw";

export class Addon extends Icon {
  constructor(public toggle: HTMLDivElement) {
    super(addon);
  }
}
