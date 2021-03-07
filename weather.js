const weather = document.querySelector(".js-weather");


// 날씨 정보를 얻기 위해 https://openweathermap.org/ 에서 얻은 API를 사용하였다.
const API_KEY = "99d4f5c855fbbd672c510a2d64b980fc";
const COORDS = 'coords';


function getWeather(lat, lng) {
    // fetch() : 데이터 가져오기
    // then() : 데이터가 완전히 들어온 다음 함수 호출
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function (response) {
            return response.json()
        }).then(function (json) {
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        });
}


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
    };
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}


function handleGeoError() {
    console.log('Cant access geo location');
}


function askForCoords() {
    // navigator API를 사용하여 현재 위치 얻기
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();