const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const toDos = [];


/* 
object인 array 데이터를 JOSON.stringify를 이용해 string으로 변환하여
local storage에 저장해 주는 함수
*/
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


/* 
input한 데이터를 버튼과 함께 리스트로 표기하고
id를 지정하여 local storage에 저장해주는 함수
*/
function paintToDo(text) {
    // .createElement - HTML에 tag를 생성할 수 있다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    // .appendChild() - ()안의 것을 child element로 넣는 것
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


// submit을 할때 실행하는 함수
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


// local strage에 있는 데이터를 가져와 표기 해주는 함수
function loadToDos()  {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        // .forEach() : array에 담겨있는 것들 각각에 한번씩 함수를 실행시킴
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();