[→ Open in Slid](https://slid.cc/vdocs/14303447635741c2b9e01cfe63d12fd0)


---


 - console은 object다.<br>
 - log도 함수인데, console object 안에 있는 함수라는 의미이다.<br>
 - &nbsp; console.log, alert 등을 내장함수(built-in function)이라고 한다.&nbsp;
 - 함수는 어떤 걸 수행하려는 한 부분으로, 원하는 만큼 쓸 수 있다.<br>





함수를 쓸 땐, funcition 함수명() {}

```
function sayHello() {
   console.log('Hello!');
}

sayHello(); // Hello!
```


<br>함수명() 괄호 안에 들어가는 단어를 인자(argument)라고 한다. 또는 parameter

```
function sayHello(name, age) {
   console.log("Hello!", name, "you have", age, "years of age.");
}

sayHello("Nicolas", 15); 
// Hello! Nicolas you have 15 years of age.
```


argument는 변수와 비슷하다. 함수 안에서 사용하게 될 이름이다.<br>argument를 사용하는 것이 외부에 있는 데이터를 읽는 함수를 만드는 방법이다.





string을 적는 다양한 방법

```
function sayHello(name, age) {
   console.log("Hello!" + name + "you have" + age + "years of age.");
}

sayHello("Nicolas", 15); 
// Hello! Nicolas you have 15 years of age.
```

```
function sayHello(name, age) {
   console.log(`Hello! ${name} you have ${age} years of age.`);
}

sayHello("Nicolas", 15); 
// Hello! Nicolas you have 15 years of age.
```





return

```
function sayHello(name, age) {
   return `Hello! ${name} you have ${age} years of age.`
}

const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas);
// Hello! Nicolas you have 15 years of age.
```





console.log() vs return

```
function sayHello(name, age) {
   console.log(`Hello! ${name} you have ${age} years of age.`);
}

const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas);
// Hello! Nicolas you have 15 years of age.
// undefined
```


console.log(greetNicolas)의 값이 undefined인 이유<br>


 - greetNicolas의 변수 값은 sayHello 함수의 출력 값이다.<br>
 - sayHello 함수는 console.log()로 인해 이미 출력 되고 끝난 상태.
 - 결과적으로 되돌아온 값(return)이 없기 때문에 정의되는 것이 없어 undefined라고 출력되는 것.<br>





객체 만들기

```
const calculator = {
   plus: function (a, b) {
      return a + b;
   }
};

const plus = calculator.plus(5, 5);
console.log(plus);  // 10
```



