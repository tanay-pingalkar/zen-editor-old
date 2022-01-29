export class Icon {
  icon: HTMLElement;

  onClick() {
    return () => {};
  }

  open() {}

  animation = () => {
    this.icon.style.animation = "clickanimation 0.1s ease-in-out";
    this.icon.onanimationend = () => {
      this.icon.style.animation = "";
    };
  };

  constructor(svg: string) {
    this.icon = this.createIcon(svg, "toggleIcons");
    let onClick = this.onClick();
    this.icon.onclick = () => {
      this.animation();
      onClick();
    };
  }

  private createIcon(svg: string, className: string) {
    const svgDiv = document.createElement("div");
    svgDiv.innerHTML = svg;
    const svgElement = svgDiv.getElementsByTagName("svg")[0];
    svgElement.classList.add(className);
    return svgElement as unknown as HTMLElement;
  }
}
