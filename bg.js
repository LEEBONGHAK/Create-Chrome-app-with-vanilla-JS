const body = document.querySelector('body');

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
}


// Math.random() : 0 ~ 1 까지의 랜덤한 숫자를 보여줌
// Math.random() * 5 : 0 ~ 5 까지의 랜덤한 숫자를 보여줌
// Math.floor() : 소수점 버림
// Math.ceil() : 소수점 올림
function genRandomNum() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandomNum();
    paintImage(randomNumber);
}

init();
