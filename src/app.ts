import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/monokai.css";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";
import "./styles/codemirror.css";
import "./styles/toggle.css";
import { Toggle } from "./components/toggle";
import { Textarea } from "./components/textarea";

export interface App {
  editor: CodeMirror.EditorFromTextArea;
  textarea: Textarea;
  toggle: Toggle;
}

export class App implements App {
  constructor() {
    this.toggle = new Toggle(this);
    this.textarea = new Textarea(this);
  }

  append(node: Element) {
    this.textarea.append(node);
    this.toggle.append(node);
    return this;
  }

  activateKeyBindings() {
    window.addEventListener("keydown", (k) => {
      if (k.code === "Space" && k.ctrlKey === true) {
        this.toggle.openOrClose();
      }

      if (k.code === "KeyF" && k.ctrlKey === true && k.altKey === true) {
        this.toggle.openOrClose();
        this.toggle.tray.icons[0].open();
      }

      if (k.code === "Period" && k.ctrlKey === true) {
        k.preventDefault();
      }
    });
  }

  deactivateKeyBindings() {
    window.addEventListener("keydown", () => {});
  }
}
