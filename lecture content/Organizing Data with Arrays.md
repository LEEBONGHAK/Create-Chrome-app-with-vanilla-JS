[→ Open in Slid](https://slid.cc/vdocs/d71d4704d74f4e26b5cb02c201152e1d)


---


camel case - JS에서 변수명을 정하는 규칙<br>


 - 변수명의 처음 시작은 무조건 소문자로 쓴다.
 - &nbsp; 변수명 중간에 space가 필요하면 space대신 단어 첫 글자를 대문자로 쓴다.<br>
 - space가 없더라도 이상한 문자 넣으면 안됨 (ex) .&nbsp; / )<br>





Arrays


리스트 같이 데이터를 저장하는 곳. 여러 데이터들을 하나로 묶는 역할<br>데이터를 [] 부호로 감싸면 된다.<br>(데이터 = String, Boolean, Number, Float...)<br>

```
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon, tue, wed, thu, fri);

// 위의 방식은 비효율적
// 따라서 array를 통해 하나로 묶어 효율적으로 만들어줌

const daysOfWeek = ["mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);

```


string만 말고 여러 데이터 타입을 함께 array로 생성 가능

```
const wat = [true, false, 20000, 2.4];

```


변수 안에 변수를 넣어도 문제되지 않는다.<br>

```
const something = "something";
const wat = [true, false, 20000, 2.4, something];
```


<br>Array는 자기만의 규칙을 가지고 있는데 0부터 숫자를 세기 때문에 원하는 결과값에 -1을 한 숫자로 찾아야 원하는 값을 찾을 수 있다.<br>

```
const daysOfWeek = ["mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek[1]); // Tue
console.log(daysOfWeek[5]); // Sat

```



