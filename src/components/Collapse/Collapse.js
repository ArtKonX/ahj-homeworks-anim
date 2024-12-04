import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Paragraph from "../ui/Paragraph/Paragraph";

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sunt similique delectus maiores non animi? Tempora pariatur quae numquam eaque quod maiores molestiae, tempore praesentium, sit blanditiis aut tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sunt similique delectus maiores non animi? Tempora pariatur quae numquam eaque quod maiores molestiae, tempore praesentium, sit blanditiis aut tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sunt similique delectus maiores non animi? Tempora pariatur quae numquam eaque quod maiores molestiae, tempore praesentium, sit blanditiis aut tenetur.'

export default class Collapse {
    constructor(elParent) {
        this.elParent = elParent;
    }

    bindToDOM() {

        this.collapseContainer = new Div({ class: 'collapse-container' }).element;
        this.collapseBtn = new Button({ class: 'collapse-btn', text: 'Collapse', type: 'button' }).element;
        this.collapseTextContainer = new Div({class: 'collapse-text-container'}).element;
        this.collapseText = new Paragraph({ class: 'collapse-text', text}).element;

        this.collapseContainer.append(this.collapseBtn, this.collapseTextContainer);
        this.elParent.appendChild(this.collapseContainer);
        this.collapseTextContainer.append(this.collapseText);

        this.collapseBtn.addEventListener('click', this.toggleText.bind(this));
    }

    toggleText() {
        if (!this.collapseTextContainer.classList.contains('collapse-text-container-anim')) {
            this.collapseTextContainer.classList.add('collapse-text-container-anim');
            this.collapseTextContainer.style.height = `${this.collapseText.offsetHeight}px`
            this.collapseBtn.classList.add('collapse-btn_collapse-active');
        } else {
            this.collapseTextContainer.classList.remove('collapse-text-container-anim');
            this.collapseTextContainer.style.height = 0;
            this.collapseBtn.classList.remove('collapse-btn_collapse-active');
        }
    }
}