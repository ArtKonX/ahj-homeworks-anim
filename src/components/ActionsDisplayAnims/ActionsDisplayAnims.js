import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";

export default class ActionsDisplayAnims {
    constructor(elParent, containerClassesBlocks, classes) {
        this.elParent = elParent;
        this.containerClassesBlocks = containerClassesBlocks;
        this.classes = classes
    }

    bindToDOM() {

        this.btnActionColapse = new Button({ class: ['btn-action-collapse', 'btn-action'], text: 'colapse', type: 'button' }).element;
        this.btnActionCallbackChat = new Button({ class: ['btn-action-callback-chat', 'btn-action'], text: 'callback chat', type: 'button' }).element;
        this.btnActionLiker = new Button({ class: ['btn-action-liker', 'btn-action'], text: 'liker', type: 'button' }).element;
        this.containerBtnsActions = new Div({ class: 'container-btns-actions' }).element;

        this.elParent.appendChild(this.containerBtnsActions);
        this.containerBtnsActions.append(this.btnActionColapse, this.btnActionCallbackChat, this.btnActionLiker);

        this.elParent.appendChild(this.containerClassesBlocks);

        this.containerBtnsActions.addEventListener('click', this.onClick.bind(this));
    }

    onClick(e) {
        Object.keys(this.classes).forEach(classEl => {
            console.log(`btn-action-${this.classes[classEl].name}`)
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
                    [...this.containerClassesBlocks.childNodes][0].remove()
                }

            }
        });
    }
}