import Collapse from "../components/Collapse/Collapse";
import CallbackChat from "../components/CallbackChat/CallbackChat";
import ActionsDisplayAnims from "../components/ActionsDisplayAnims/ActionsDisplayAnims";
import Liker from "../components/Liker/Liker";

import Div from "../components/ui/Div/Div";

document.addEventListener("DOMContentLoaded", () => {
  const anims = ["like1", "like2", "like3", "like4"];

  const dataClasses = {
    collapse: {
      class: Collapse,
      name: "collapse",
    },
    callbackChat: {
      class: CallbackChat,
      name: "callback-chat",
    },
    liker: {
      class: Liker,
      name: "liker",
      anims,
    },
  };

  const app = document.querySelector("#app");

  const container = new Div({ class: "container" }).element;
  const containerClassesBlocks = new Div({ class: "container-classes-blocks" })
    .element;

  app.appendChild(container);

  const actionsDisplayAnims = new ActionsDisplayAnims(
    document.querySelector(".container"),
    containerClassesBlocks,
    dataClasses,
  );
  actionsDisplayAnims.bindToDOM();
});
