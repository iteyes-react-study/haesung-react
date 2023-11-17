const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 3, color: "blue" }
];

let number = 3;

console.log(arr.indexOf(number));
console.log(arr.findIndex((elm) => elm.color === "red")); //요소 인덱스
console.log(arr.find((elm) => elm.color === "red")); //요소
console.log(arr.filter((elm) => elm.color === "blue")); //필터

const arr1 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" }
];
const arr2 = [
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 3, color: "blue" }
];
//concat : 배열을 합침
console.log(arr1.concat(arr2));
