const person = {
  name: "홍길동",
  age: 25
};

person.location = "한국"; //프로퍼티 추가
person["gender"] = "남성";

console.log(person);
// 객체를 상수로 선언해도 그 안에 속성값은 수정 가능
// 단, person = ??? 형식으로 사용되어지면 안됨

delete person["name"]; //추천X (메모리에 남아있음)
console.log(person);

person.name = null; //추천
console.log(person);
