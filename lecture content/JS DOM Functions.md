[→ Open in Slid](https://slid.cc/vdocs/7e3f2683c78442b89ebc7b24bf5ec98c)


---


HTML이 자바스크립트하고 함께 쓰려고 하면 어떻게 동작?<br>우선 CSS와 같이 자바스크립트에서도 element를 선택할 수 있다. 그래서 변경할 수 있는 것.<br>





&lt;h1 id="title"&gt;This works!&lt;/h1&gt;이 존재한다고 할때,


<br>CSS에서 id로 무언가 선택할 때는 #을 써서 선택한다.<br>

```
#title {

}
```


<br>javascript 에서 id로 무언가 선택할 때는 document.getElementById 라고 써서 선택할 수 있다.<br>


 - document -&gt; 대표하는 HTML을 준다. JS로 HTML에 접근 가능

```
const title = console.log(document.getElementById("title"));

console.log(title);
// <h1 id="title">This works!</h1>
```





뭔가를 바꾸고 싶다고 할때, DOM 형태로 변경


 - &nbsp; Document Object Model의 약자.
 - 자바스크립트에서 HTML tag들을 가져와 객체로 바꾸어서 변경할 수 있다.

```
const title = console.log(document.getElementById("title"));

console.log(title);
// <h1 id="title">This works!</h1>

title.innerHTML = "Hi! From JS"
// <h1 id="title>Hi! From JS!</h1>
```


우리가 배울 모든 함수들, 찾게될 모든 함수들은 DOM(Document Object Model)형태로 변경 가능





ex) title로 할 수 있는 모든 것<br>

```
const title = console.log(document.getElementById("title"));
// id 속성을 가진 요소를 찾아 객체 반환하기

console.dir(title);
// title로 할 수 있는 것들을 보여줌

console.log(title);
// <h1 id="title">This works!</h1>

title.innerHTML = "Hi! From JS"
// <h1 id="title>Hi! From JS!</h1>
// 내용 수정

title.style.color = "red"
// 색상 변경

document.title = 'I own you now'
// 타이틀 변경
```


이처럼 각종 html 문서를 감지하고 추가하고 변경하는 등의 것들을 JS로 객체화 하는 것을 통해 바꿀 수 있다.<br>


<br>document.queryselector()<br>


 - &nbsp; queryselector는 특정 name이나 id를 제한하지 않고 CSS 선택자를 사용하여 요소를 찾을 수 있다.
