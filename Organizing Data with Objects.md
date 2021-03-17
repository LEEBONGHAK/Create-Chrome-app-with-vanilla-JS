[→ Open in Slid](https://slid.cc/vdocs/7c2ea0c2c45041ce82c792e77e2bd8be)


---


Array와 Object의 다른 점


 - &nbsp;Object에는 각 value에 이름을 줄 수 있음
 - 일반적으로 DB에서 가져온 리스트 데이터라면 Array
 - 데이터를 합쳐서 만들어야 한다면 Object





Object(python의 dictionary와 비슷한듯)


실제 객체를 만들어 저장하는 방식. 쉽게 말해 label을 저장하고 싶은 data에 준다고 보면 된다.<br>


실행하기 위해서 데이터를 {} 부호로 감싼다.<br>

```
const nicoInfo = {
   name:"Nico",
   age:33,
   gender:"Male",
   isHandsome:true
}
```


* "Nico" 앞의 name은 텍스트가 아닌 변수를 의미한다. (텍스트는 ""안에 서술해야 됨.)<br><br>Object는 원하는 결과값을 찾으려면 내가 지정한 정보의 라벨을 입력하면 된다.


원한다면 변수의 값을 변경할 수 있다.

```
console.log(nicoInfo.gender); // Male

nicoInfo.gender = "Female"

console.log(nicoInfo.gender); // Female
```


* nicoInfo 안의 값은 수정할 수 있지만, nicoInfo 라는 큰 틀을 바꿀 수는 없다.


<br>Array와 Object는 서로 포함시킬 수 있다.<br>

```
const nicoInfo = {
   name:"Nico",
   age:33,
   gender:"Male",
   isHandsome:true,
   favMovies:["Along the gods", "LOTR", "Old boy"],
   favFood:[
      {
         name:"Kimchi",
         fatty:false
      }, 
      {
         name:"Cheese burger", 
         fatty:true
      }
   ]
}
```





자바스크립트 기본 문법


 - &nbsp; 정보를 정렬할 때 데이터와 데이터 사이에 , 를 꼭 써준다.<br>
 - &nbsp; String을 쓸 때 "를 앞 뒤에 꼭 넣어줘야 한다.<br>
 - &nbsp; 콜솔 로그를 읽는 것 잊지 말기 -&gt; 오류 메세지를 읽을 줄 알면 에러를 해결하기 쉬움
 - JS는 말썽이 나도 HTML/CSS는 타격을 받지 않으니 참고<br>



