// 문자정렬
let chars = ["나", "다", "가"];

chars.sort(); //문자열 정렬
console.log(chars);

// 숫자정렬
let numbers = [0, 1, 4, 3, 6, 5, 2];

const compare = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

numbers.sort(compare);
console.log(numbers);
