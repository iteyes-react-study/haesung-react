//함수 표현식
let hello = function () {
  return "안녕";
};

const helloText = hello();
console.log(helloText);

//로직이 있는경우
let directCal = (a, b) => {
  return a * b;
};

console.log(directCal(10, 20));

//로직X
let directHello = () => "hello";

console.log(directHello());
