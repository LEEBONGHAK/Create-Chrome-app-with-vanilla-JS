const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];


// 버튼을 눌으면 해당 li와 저장된 local storage 데이터를 제거하는 함수
function deleteToDo(event) {
    // .target : 'event'에 'target'은 선택한 것이 어떤 HTML을 갖는지 알려줌
    const btn = event.target;
    // .parentNode : 부모 tag를 불러옴
    const li = btn.parentNode;
    // .removeChild() : 해당 자식 tag들을 제거
    toDoList.removeChild(li);
    // .filter() : .forEach와 같이 각각의 item들이 실행되게 만드면서 array를 만듬
    // li에 없는 id인 toDos를 체크 -> 지우고 싶은 li을 제외한 array 생성
    const cleanToDos = toDos.filter(function (toDo) {
        // li.id의 경우 string -> parseInt()로 숫자로 변환 
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}



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
    delBtn.addEventListener('click', deleteToDo);
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