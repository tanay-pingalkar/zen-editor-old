import { EditorView, basicSetup } from "codemirror";
import { EditorState, Compartment, Text } from "@codemirror/state";
import { Component } from "../utilities/component";

import "./codemirror.css";

import { App } from "../app";

export class Editor extends Component<"div"> {
  private editor: EditorView;

  constructor() {
    super("div", "editorDiv");
  }

  public content(path: string, text: string) {
    App.TM?.tabs.open(path, this);

    let editor_state = EditorState.create({
      doc: Text.of(text.split("\n")),
      extensions: [basicSetup],
    });

    this.editor = new EditorView({
      state: editor_state,
      parent: this.getHtml(),
    });
  }
}
