import { App } from "../app";
import { Button, Div, Ele } from "../utilities/element";
import "./emptytab.css";

export const EmptyTab = Div("emptytab", {}, [
  Div("display", {}, [
    Div("iconic", {}, [
      Div("logo", {}, []),
      Div("iconicrow", {}, [
        Ele("p", { className: "version" }, "version dev_0.1"),
        Button("bigbutton", {}, "Click For Update"),
      ]),
    ]),
    Button(
      "bigbutton",
      {
        onClick: () => App.TM?.files.openFile(),
      },
      "Open File"
    ),
    Button("bigbutton", {}, "Open Folder"),
    Button("bigbutton", {}, "Documentation"),
  ]),
]);
