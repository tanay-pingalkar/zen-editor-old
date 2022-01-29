import { Icon } from "./icon";

export class Tray {
  iconNumberCounter = 0;
  icons: Record<number, Icon> = {};
  tray: HTMLDivElement;
  constructor() {
    this.tray = document.createElement("div");
    this.tray.className = "tray";
  }

  appendChild<T extends Icon>(child: T) {
    this.tray.appendChild(child.icon);
    this.icons[this.iconNumberCounter] = child;
    this.iconNumberCounter++;
  }
}
