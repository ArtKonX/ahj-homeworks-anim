import Button from "../ui/Button/Button";
import Img from "../ui/Img/Img";
import Div from "../ui/Div/Div";

import img from '../../img/heart.png'

export default class Liker {
    constructor(elParent, anims) {
        this.elParent = elParent;
        this.anims = anims;
    }

    bindToDOM() {
        this.likerContainer = new Div({ class: 'liker-container' }).element;
        this.likesBtnContainer = new Div({ class: 'likes-btn-container' }).element;
        this.btnLike = new Button({ class: 'btn-like', text: 'Like' }).element;

        this.elParent.appendChild(this.likerContainer);
        this.likerContainer.appendChild(this.likesBtnContainer);
        this.likesBtnContainer.appendChild(this.btnLike);

        this.btnLike.addEventListener('click', this.onLike.bind(this));
    }

    onLike() {

        const indx = Math.floor(Math.random() * (this.anims.length - 1));

        const likeImg = new Img({ class: 'like-img', src: img }).element;
        this.likesBtnContainer.appendChild(likeImg);

        likeImg.style.animationName = this.anims[indx];

        likeImg.addEventListener('animationend', () => {
            likeImg.remove();
        })
    }
}