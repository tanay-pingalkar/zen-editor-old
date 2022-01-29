import { Icon } from "./icon";
import files from "../svgs/files.svg?raw";
import { Toggle } from "./toggle";

export class Files extends Icon {
  page = (() => {
    let page = document.createElement("div");
    page.className = "more";
    page.innerHTML = " <button>files</button>";
    return page;
  })();
  constructor(public toggle: Toggle) {
    super(files);
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
