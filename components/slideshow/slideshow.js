// STYLED @ index.less

class SlideShowButton {
    constructor(element) {
        this.element = element;
        // console.log(element.dataset.slideshowBtn);
        this.btnSide = element.dataset.slideshowBtn;
        element.addEventListener('click', () => this.buttonClick())
    }

    buttonClick() {
        console.log(this.btnSide + 'click');
        console.log(slides.length);
        let activeSlide = document.querySelector('.img-active');
        // console.log(activeSlide);
        activeSlide.classList.remove('img-active');

    }
}



let slides = document.querySelectorAll('.slideshow-img');
// console.log(slides);
let gallery = [...slides];
console.log(gallery);

let slideshowbuttons = document.querySelectorAll('.slideshow-btn');
slideshowbuttons.forEach(el => new SlideShowButton(el));