import { Component } from "../utilities/component";
import { ToggleMember } from "../utilities/toggle-member";
import { TabsIcon } from "./icon";
import { Tab } from "./tab";
import "./tabs.css";

import { Pages } from "../utilities/pages";
import { App } from "../app";
import { Button, Div } from "../utilities/element";
import addButton from "../svgs/add.svg?raw";
import { EmptyTab } from "../emptytab/emptytab";

class TabLi extends Component<"div"> {}
class TabPage extends Component<"div"> {
  constructor() {
    super("div", "page_content");
  }

  listTab(id: string) {
    let tab = Button("page_li", {}, id);
    tab.render(this.getHtml());
    App.toggle?.toggleHeightToPage(App.TM?.tabs.pages!);
  }
  removeLastTab() {
    this.removeLastChild();
  }
}

class TabsPages extends Pages {
  public page = new TabPage();

  constructor() {
    super();

    this.pushPage(
      Div("page", {}, [
        Div("tabs_nav", {}, [
          Button(
            "back_button",
            {
              onClick: () => {
                App.TM?.tabs.addTab("empty-tab", EmptyTab);
              },
            },
            addButton
          ),
          Div("back_button", {}, "close saved"),
        ]),

        this.page,
      ])
    );
  }
}

class TabsView extends Component<"div"> {
  constructor() {
    super("div", "tabs_view");
  }

  public view(component: Component<"div">) {
    if (this.getChild(0)) this.removeLastChild();
    component.render(this.getHtml());
  }
}

export class Tabs extends ToggleMember<TabsPages> {
  private tabs: Array<{ id: string; tab: Tab }> = [];

  private tempTab: { id: string; tab: Tab } | undefined;
  private tabview: TabsView;

  constructor() {
    super(new TabsIcon(), new TabsPages());
    this.tabview = new TabsView();
    App.show(this.tabview);
  }

  public open(id: string, content: Component<"div">) {
    if (this.tempTab) {
      this.pages.page.removeLastTab();
    }
    this.tempTab = { id: id, tab: new Tab(content) };
    this.tabview.view(this.tempTab.tab);
    this.pages.page.listTab(id);
  }

  public addTab(id: string, content: Component<"div">) {
    this.tabs.push({ id: id, tab: new Tab(content) });
    this.tabview.view(this.tabs[this.tabs.length - 1].tab);
    this.pages.page.listTab(id);
  }
}
