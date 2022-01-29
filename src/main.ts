import { App } from "./app";

let app = document.getElementById("app");
if (app) new App().append(app).activateKeyBindings();
