import { Icon } from "./icon";
import settings from "../svgs/settings.svg?raw";

export class Settings extends Icon {
  constructor(public toggle: HTMLDivElement) {
    super(settings);
  }
}
