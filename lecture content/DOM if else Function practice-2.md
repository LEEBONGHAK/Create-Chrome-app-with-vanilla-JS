[→ Open in Slid](https://slid.cc/vdocs/a373d6cafbc94f71b190e74c266e90d5)


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
        <h1 id="title" class="btn">This works!</h1>
        <script src="index.js"></script>
    </body>
</html>
```





index.css

```
body {
  background-color: #ecf0f1;
}

.btn {
  cursor: pointer;
}

h1 {
  color: #34495e;
  transition: color 0.5s ease-in-out;
}

.clicked {
  color: #7f8c8d;
}

```





index.js

```
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
 title.addEventListener("click", handleClick);
}
// 초기화 함수

init();


```


toggle()을 이용해 간단하게 만들어 줄 수도 있음
