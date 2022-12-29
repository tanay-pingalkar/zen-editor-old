import { Toggle } from "../toggle/toggle";
import { ToggleMember } from "../utilities/toggle-member";
import { Pages } from "../utilities/pages";
import { Component } from "../utilities/component";
import { App } from "../app";
import { HamburgerPages } from "./pages";
import { HamburgerIcon } from "./icon";
import { Button, Div, Ele } from "../utilities/element";
import "./hamburger.css";
import backarrow from "../svgs/backarrow.svg?raw";

export class Hamburgur extends ToggleMember<HamburgerPages> {
  // protected isOpen: boolean = false;

  constructor() {
    super(new HamburgerIcon(), new HamburgerPages());
    this.pages.pushPage(
      Ele("div", { className: "page" }, [
        Div("page_content", {}, [
          Button("page_button", {}, "about"),
          Button("page_button", {}, "themes"),
          Button("page_button", {}, "help"),
          Button(
            "page_button",
            {
              onClick: () =>
                this.pages.pushPage(
                  Ele("div", { className: "page" }, [
                    Div("page_content", {}, [
                      Ele(
                        "button",
                        {
                          onClick: () => {
                            this.pages.popPage();
                          },
                          className: "back_button",
                        },
                        backarrow
                      ),
                      Button("page_button", {}, "into more"),
                    ]),
                  ])
                ),
            },
            "more"
          ),
        ]),
      ])
    );
  }
}
