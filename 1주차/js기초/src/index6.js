const person = {
  name: "홍길동",
  age: 25,
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
  }
};

person["say"]();
// person.say(); //객체 내 함수 사용법

console.log(`name : ${"name" in person}`);
//객체 내 속성 유무 확인
