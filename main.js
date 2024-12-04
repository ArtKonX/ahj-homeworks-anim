/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/ui/Button/Button.js

class Button {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const btn = document.createElement("button");
    !Array.isArray(this.params.class) ? btn.classList.add(this.params.class) : btn.classList.add(...this.params.class);
    if (this.params.text) btn.innerHTML = this.params.text;
    btn.type = this.params.type;
    return btn;
  }
}
;// CONCATENATED MODULE: ./src/components/ui/Div/Div.js

class Div {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const div = document.createElement("div");
    div.classList.add(this.params.class);
    return div;
  }
}
;// CONCATENATED MODULE: ./src/components/ui/Paragraph/Paragraph.js

class Paragraph {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const p = document.createElement("p");
    !Array.isArray(this.params.class) ? p.classList.add(this.params.class) : p.classList.add(...this.params.class);
    p.textContent = this.params.text;
    return p;
  }
}
;// CONCATENATED MODULE: ./src/components/Collapse/Collapse.js



const Collapse_text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sunt similique delectus maiores non animi? Tempora pariatur quae numquam eaque quod maiores molestiae, tempore praesentium, sit blanditiis aut tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sunt similique delectus maiores non animi? Tempora pariatur quae numquam eaque quod maiores molestiae, tempore praesentium, sit blanditiis aut tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sunt similique delectus maiores non animi? Tempora pariatur quae numquam eaque quod maiores molestiae, tempore praesentium, sit blanditiis aut tenetur.";
class Collapse {
  constructor(elParent) {
    this.elParent = elParent;
  }
  bindToDOM() {
    this.collapseContainer = new Div({
      class: "collapse-container"
    }).element;
    this.collapseBtn = new Button({
      class: "collapse-btn",
      text: "Collapse",
      type: "button"
    }).element;
    this.collapseTextContainer = new Div({
      class: "collapse-text-container"
    }).element;
    this.collapseText = new Paragraph({
      class: "collapse-text",
      text: Collapse_text
    }).element;
    this.collapseContainer.append(this.collapseBtn, this.collapseTextContainer);
    this.elParent.appendChild(this.collapseContainer);
    this.collapseTextContainer.append(this.collapseText);
    this.collapseBtn.addEventListener("click", this.toggleText.bind(this));
  }
  toggleText() {
    if (!this.collapseTextContainer.classList.contains("collapse-text-container-anim")) {
      this.collapseTextContainer.classList.add("collapse-text-container-anim");
      this.collapseTextContainer.style.height = `${this.collapseText.offsetHeight}px`;
      this.collapseBtn.classList.add("collapse-btn_collapse-active");
    } else {
      this.collapseTextContainer.classList.remove("collapse-text-container-anim");
      this.collapseTextContainer.style.height = 0;
      this.collapseBtn.classList.remove("collapse-btn_collapse-active");
    }
  }
}
;// CONCATENATED MODULE: ./src/components/ui/Form/Form.js

class Form {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const form = document.createElement("form");
    !Array.isArray(this.params.class) ? form.classList.add(this.params.class) : form.classList.add(...this.params.class);
    return form;
  }
}
;// CONCATENATED MODULE: ./src/components/ui/Heading/Heading.js

class Heading {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const heading = document.createElement(`h${this.getLevel()}`);
    heading.classList.add(this.params.class);
    heading.textContent = this.params.text;
    return heading;
  }
  getLevel() {
    if (this.params.level in [1, 2, 3, 4, 5, 6]) return this.params.level;
    throw new Error("Вы указали не число или число не входящее в промежутке от 1 до 6");
  }
}
;// CONCATENATED MODULE: ./src/components/ui/Textarea/Textarea.js

class Textarea {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const textarea = document.createElement("textarea");
    textarea.classList.add(this.params.class);
    textarea.name = this.params.name;
    if (this.params.id) textarea.id = this.params.id;
    textarea.textContent = this.params.text;
    return textarea;
  }
}
;// CONCATENATED MODULE: ./src/components/CallbackChat/CallbackChat.js





class CallbackChat {
  constructor(elParent) {
    this.elParent = elParent;
  }
  bindToDOM() {
    this.callbackChatContainer = new Div({
      class: "callback-chat-container"
    }).element;
    this.btnAddChat = new Button({
      class: "btn-add-chat",
      type: "button"
    }).element;
    this.form = new Form({
      class: "form-container"
    }).element;
    this.formTitleCloseBtn = new Div({
      class: "form-title-close-btn"
    }).element;
    this.formTitle = new Heading({
      class: "form-title",
      text: "Напишите нам",
      level: 1
    }).element;
    this.formTextarea = new Textarea({
      class: "form-textarea",
      name: "message",
      text: ""
    }).element;
    this.closeBtn = new Button({
      class: "close-btn",
      type: "button",
      text: "x"
    }).element;
    this.submitBtn = new Button({
      class: "submit-btn",
      type: "button",
      text: "Отправить"
    }).element;
    this.form.append(this.formTitleCloseBtn, this.formTextarea, this.submitBtn);
    this.formTitleCloseBtn.append(this.formTitle, this.closeBtn);
    this.elParent.appendChild(this.callbackChatContainer);
    this.callbackChatContainer.appendChild(this.btnAddChat);
    this.btnAddChat.addEventListener("click", this.addChat.bind(this));
    this.closeBtn.addEventListener("click", this.closeForm.bind(this));
  }
  addChat() {
    if (!this.callbackChatContainer.querySelector(".form-container")) {
      this.callbackChatContainer.appendChild(this.form);
      setTimeout(() => {
        this.form.classList.add("form-container_appearance");
      }, 0);
      this.btnAddChat.style.transform = "scale(0)";
    }
  }
  closeForm() {
    if (this.callbackChatContainer.querySelector(".form-container")) {
      this.form.classList.remove("form-container_appearance");
      setTimeout(() => {
        this.form.remove();
      }, 600);
      this.btnAddChat.style.transform = "scale(1)";
    }
  }
}
;// CONCATENATED MODULE: ./src/components/ActionsDisplayAnims/ActionsDisplayAnims.js


class ActionsDisplayAnims {
  constructor(elParent, containerClassesBlocks, classes) {
    this.elParent = elParent;
    this.containerClassesBlocks = containerClassesBlocks;
    this.classes = classes;
  }
  bindToDOM() {
    this.btnActionColapse = new Button({
      class: ["btn-action-collapse", "btn-action"],
      text: "colapse",
      type: "button"
    }).element;
    this.btnActionCallbackChat = new Button({
      class: ["btn-action-callback-chat", "btn-action"],
      text: "callback chat",
      type: "button"
    }).element;
    this.btnActionLiker = new Button({
      class: ["btn-action-liker", "btn-action"],
      text: "liker",
      type: "button"
    }).element;
    this.containerBtnsActions = new Div({
      class: "container-btns-actions"
    }).element;
    this.elParent.appendChild(this.containerBtnsActions);
    this.containerBtnsActions.append(this.btnActionColapse, this.btnActionCallbackChat, this.btnActionLiker);
    this.elParent.appendChild(this.containerClassesBlocks);
    this.containerBtnsActions.addEventListener("click", this.onClick.bind(this));
  }
  onClick(e) {
    Object.keys(this.classes).forEach(classEl => {
      console.log(`btn-action-${this.classes[classEl].name}`);
      if (e.target.classList.contains(`btn-action-${this.classes[classEl].name}`)) {
        if (this.containerClassesBlocks.querySelector(`.${this.classes[classEl].name}-container`)) {
          this.containerClassesBlocks.querySelector(`.${this.classes[classEl].name}-container`).remove();
        } else {
          if (this.classes[classEl].anims) {
            const instance = new this.classes[classEl].class(this.containerClassesBlocks, this.classes[classEl].anims);
            instance.bindToDOM();
          } else {
            const instance = new this.classes[classEl].class(this.containerClassesBlocks);
            instance.bindToDOM();
          }
        }
        if (this.containerClassesBlocks.childNodes.length > 1) {
          [...this.containerClassesBlocks.childNodes][0].remove();
        }
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/components/ui/Img/Img.js

class Img {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const img = document.createElement("img");
    img.classList.add(this.params.class);
    img.src = this.params.src;
    return img;
  }
}
;// CONCATENATED MODULE: ./src/img/heart.png
const heart_namespaceObject = __webpack_require__.p + "be0d860e775accf30d67.png";
;// CONCATENATED MODULE: ./src/components/Liker/Liker.js




class Liker {
  constructor(elParent, anims) {
    this.elParent = elParent;
    this.anims = anims;
  }
  bindToDOM() {
    this.likerContainer = new Div({
      class: "liker-container"
    }).element;
    this.likesBtnContainer = new Div({
      class: "likes-btn-container"
    }).element;
    this.btnLike = new Button({
      class: "btn-like",
      text: "Like"
    }).element;
    this.elParent.appendChild(this.likerContainer);
    this.likerContainer.appendChild(this.likesBtnContainer);
    this.likesBtnContainer.appendChild(this.btnLike);
    this.btnLike.addEventListener("click", this.onLike.bind(this));
  }
  onLike() {
    const indx = Math.floor(Math.random() * (this.anims.length - 1));
    const likeImg = new Img({
      class: "like-img",
      src: heart_namespaceObject
    }).element;
    this.likesBtnContainer.appendChild(likeImg);
    likeImg.style.animationName = this.anims[indx];
    likeImg.addEventListener("animationend", () => {
      likeImg.remove();
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js





document.addEventListener("DOMContentLoaded", () => {
  const anims = ["like1", "like2", "like3", "like4"];
  const dataClasses = {
    collapse: {
      class: Collapse,
      name: "collapse"
    },
    callbackChat: {
      class: CallbackChat,
      name: "callback-chat"
    },
    liker: {
      class: Liker,
      name: "liker",
      anims
    }
  };
  const app = document.querySelector("#app");
  const container = new Div({
    class: "container"
  }).element;
  const containerClassesBlocks = new Div({
    class: "container-classes-blocks"
  }).element;
  app.appendChild(container);
  const actionsDisplayAnims = new ActionsDisplayAnims(document.querySelector(".container"), containerClassesBlocks, dataClasses);
  actionsDisplayAnims.bindToDOM();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;