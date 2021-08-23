const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

// 현재 시간 불러오기
function getTime() {
    const date = new Date();    // 현재 시간을 가져오는 함수로 시간을 가져와 변수에 저장
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);     // 시간 표시 간격 지정하여 반복 (ms)
}

init();
