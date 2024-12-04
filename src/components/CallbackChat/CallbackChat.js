import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Form from "../ui/Form/Form";
import Heading from "../ui/Heading/Heading";
import Textarea from "../ui/Textarea/Textarea";

export default class CallbackChat {
  constructor(elParent) {
    this.elParent = elParent;
  }

  bindToDOM() {
    this.callbackChatContainer = new Div({
      class: "callback-chat-container",
    }).element;
    this.btnAddChat = new Button({
      class: "btn-add-chat",
      type: "button",
    }).element;

    this.form = new Form({ class: "form-container" }).element;
    this.formTitleCloseBtn = new Div({ class: "form-title-close-btn" }).element;
    this.formTitle = new Heading({
      class: "form-title",
      text: "Напишите нам",
      level: 1,
    }).element;
    this.formTextarea = new Textarea({
      class: "form-textarea",
      name: "message",
      text: "",
    }).element;
    this.closeBtn = new Button({
      class: "close-btn",
      type: "button",
      text: "x",
    }).element;
    this.submitBtn = new Button({
      class: "submit-btn",
      type: "button",
      text: "Отправить",
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
