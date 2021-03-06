const COORDS = 'coords';


function saveCoords(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}


function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        // key와 value의 변수 명이 같다면 아래와 같이 표현 가능
        latitude,
        longitude
    }
    saveCoords(coordObj);
}


function handleGeoError() {
    
}


function askForCoords() {
    // navigator API를 사용하여 현재 위치 얻기
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function getWeather() {

}





function loadCoords() {
    const loadCords = localStorage.getItem(COORDS);
    if (loadCords === null) {
        askForCoords();
    } else {
        getWeather();
    }
}


function init() {
    loadCoords();
}

init();