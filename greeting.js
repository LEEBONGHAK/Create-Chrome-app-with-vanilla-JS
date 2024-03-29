const form = document.querySelector('.js-form'),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);    // localStorage에 이름 저장
}

function handleSubmit(event) {
    event.preventDefault();         // 기본 event 제거
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);      // localStorage에 저장된 이름 가져오기
    if (currentUser === null) {
        // 유저 없음
        askForName();
    } else {
        // 유저 존재
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
