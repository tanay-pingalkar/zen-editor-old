import { Icon } from "./icon";
import hamburger from "../svgs/hamburger.svg?raw";
import { Toggle } from "./toggle";

export class Hamburgur extends Icon {
  page = (() => {
    let page = document.createElement("div");
    page.className = "more";
    page.innerHTML =
      "<button>more</button> <button>about</button><button>themes</button> <button>help</button> ";
    return page;
  })();

  constructor(public toggle: Toggle) {
    super(hamburger);
  }

  onClick() {
    return async () => {
      this.toggle.appendChild(this.page, 12);
    };
  }

  open() {
    this.toggle.appendChild(this.page, 12);
  }
}
