const slideList = [{
    img: "img/1.jpg",
    text: "Lokalizacja",
}, {
    img: "img/2.jpg",
    text: "Piękno",
}, {
    img: "img/3.jpg",
    text: "Wygoda",
}];


const image = document.querySelector('.header__slider-img');
const h1 = document.querySelector('.header__slider-text');
const dots = [...document.querySelectorAll('.header__slider-dots span')];

let time = 1500;
let active = 2;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active == 3) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

setInterval(changeSlide, time);
