[→ Open in Slid](https://slid.cc/vdocs/87a5639816c84b03ad86421002ed53f0)


---


index.html

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css" />
    </head>
    <body>
        <h1 id="title">This works!</h1>
        <script src="index.js"></script>
    </body>
</html>
```





index.css

```
body {
  background-color: peru;
}

h1 {
  color: white;
}

```





index.js

```
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#f8c8d"

function handleClick() {
   const currentColor = title.style.color;
   if (currentColor === BASE_COLOR) {
      title.style.color = OTHER_COLOR;
   } else {
      title.style.color = BASE_COLOR;
   }
}

function init() {
   title.style.color = BASE_COLOR;
   title.addEventListener("click", handleClick);
}
// 초기화 함수

init();


```


이벤트를 찾는 방법


 - 구글에 HTML JavaScript DOM event MDN 검색



