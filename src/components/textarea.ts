import CodeMirror from "codemirror";
import { App } from "../app";

export class Textarea {
  textarea: HTMLTextAreaElement;
  editor!: CodeMirror.EditorFromTextArea;

  constructor(public app: App) {
    this.textarea = document.createElement("textarea");
  }

  append(node: Node) {
    node.appendChild(this.textarea);
    this.editor = CodeMirror.fromTextArea(this.textarea, {
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
    });

    this.editor.on("focus", () => {
      this.app.toggle.close();
    });
  }
}
