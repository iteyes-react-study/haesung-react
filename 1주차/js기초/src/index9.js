//배열 내장함수
const arr = [1, 2, 3, 4, 5];
const newArr = [];

arr.forEach((elm) => console.log(elm));
// arr.forEach(function (elm) {console.log(elm)});

arr.forEach((elm) => newArr.push(elm + 2));
console.log(newArr);

//map : 기존 배열을 가지고 새로운 배열을 만들어주는 기능
const mapArr = arr.map((elm) => {
  return elm * 2;
});
console.log(mapArr);

//includes : 배열 내 value 유무 확인
console.log(arr.includes(3));

//인덱스 출력 (해당하는 값이 없는 경우 -1 return)
console.log(arr.indexOf(3));
