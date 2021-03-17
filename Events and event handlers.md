[→ Open in Slid](https://slid.cc/vdocs/b5b01121293c4a89b84a07515bd8af33)


---


JS는 HTML과 CSS를 바꾸는 기능을 하지만 이벤트에 반응하기 위해 만들어졌다.<br><br>이벤트란?


 - 웹사이트에서 발생하는 것들<br>
 - click, resize, submit, input, change, load, before, closing, printing 같은 것들<br>


<br>addEventListener구문


target.addEventListener(type, listener);<br>


 - target - 이벤트를 발생시키고 싶어하는 것
 - type - type이 발생하면 이벤트 실행
 - listener - 이벤트를 다룰 함수&nbsp;


<br>예제) 윈도우의 사이즈가 변경되면 함수 실행

```
const title = document.querySelector("#title");

function handleResize() {
   console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
```


handleResize 를 할 때 , 뒤에 ()를 붙이지 않는다. ()를 붙이면 함수가 바로 호출되기 때문



