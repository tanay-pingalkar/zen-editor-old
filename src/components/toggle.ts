import { App } from "../app";
import { Addon } from "./addon";
import { Debugger } from "./debugger";
import { Files } from "./files";
import { Hamburgur } from "./hamburger";
import { Run } from "./run";
import { Search } from "./search";
import { Settings } from "./settings";
import { Terminal } from "./terminal";
import { Tray } from "./tray";

export class Toggle {
  toggle: HTMLDivElement;
  tray: Tray;
  isOpen: boolean = false;
  isExpanded = false;
  child: (Node & Element) | null = null;
  extras: number = 0;

  constructor(public app: App) {
    let toggle = document.createElement("div");
    this.toggle = toggle;

    this.toggle.className = "toggle";
    this.toggle.style.top = "-30px";
    this.toggle.onmouseover = () => {
      toggle.style.animation = "hoveron 0.1s ease forwards";
    };

    this.toggle.onmouseleave = this.onMouseLeave.bind(this);

    this.tray = new Tray();

    this.tray.appendChild(new Files(this));
    this.tray.appendChild(new Addon(this.toggle));
    this.tray.appendChild(new Search(this.toggle));
    this.tray.appendChild(new Debugger(this.toggle));
    this.tray.appendChild(new Terminal(this.toggle));
    this.tray.appendChild(new Settings(this.toggle));
    this.tray.appendChild(new Run(this.toggle));
    this.tray.appendChild(new Hamburgur(this));

    this.toggle.appendChild(this.tray.tray);
  }

  onMouseLeave() {
    this.toggle.style.animation = "hoverleave 0.1s ease forwards";
  }

  open() {
    this.toggle.style.animation = "hoveron 0.1s ease forwards";
    this.isOpen = true;
  }

  close() {
    this.toggle.style.animation = "hoverleave 0.1s ease forwards";
    if (this.isExpanded) {
      this.contractToggleHeight();
      this.isExpanded = false;
    }
    this.isOpen = false;
  }

  openOrClose() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  expandToggleHeight(height: number) {
    let starttime: number;
    let initial = parseInt(window.getComputedStyle(this.toggle).height);
    let dist = height;
    let duration = 50;
    const moveit = (timestamp: number) => {
      if (starttime === undefined) {
        starttime = timestamp;
      }

      let runtime = timestamp - starttime;
      let progress = Math.min(runtime / duration, 1);
      this.toggle.style.height = `${progress * dist + initial}px`;

      if (runtime < duration) {
        window.requestAnimationFrame(moveit);
      }
    };
    window.requestAnimationFrame(moveit);

    this.toggle.onmouseleave = () => {};

    this.isExpanded = true;
  }

  contractToggleHeight() {
    let starttime: number;
    let initial = 36;
    let dist = parseInt(window.getComputedStyle(this.toggle).height);

    let duration = 50;
    const moveit = (timestamp: number) => {
      if (starttime === undefined) {
        starttime = timestamp;
      }
      let runtime = timestamp - starttime;
      let progress = Math.min(runtime / duration, 1);

      this.toggle.style.height = `${dist - progress * (dist - initial)}px`;
      if (runtime < duration) {
        window.requestAnimationFrame(moveit);
      }
    };

    window.requestAnimationFrame(moveit);
    this.toggle.onmouseleave = this.onMouseLeave.bind(this);
    this.isExpanded = false;
  }

  appendChild<T extends Node & Element>(child: T, extras: number = 0) {
    if (this.child && this.child != child) {
      let lateChild = this.child;
      let lateExtras = this.extras;
      this.child = child;
      this.extras = extras;
      let lateChildHeight: number = parseInt(
        window.getComputedStyle(lateChild).height
      );
      this.toggle.removeChild(lateChild);
      this.toggle.appendChild(this.child);
      let childHeight = parseInt(window.getComputedStyle(this.child).height);
      let height: number =
        childHeight - lateChildHeight - lateExtras + this.extras;
      this.expandToggleHeight(height);
    } else if (this.child) {
      this.contractToggleHeight();
      this.toggle.removeChild(this.child);
      this.isExpanded = false;
      this.child = null;
      this.extras = 0;
    } else {
      this.child = child;
      this.extras = extras;
      this.toggle.appendChild(this.child);
      this.expandToggleHeight(
        parseInt(window.getComputedStyle(this.child).height) + this.extras
      );
      return;
    }
  }

  append(node: Node) {
    node.appendChild(this.toggle);
  }
}
