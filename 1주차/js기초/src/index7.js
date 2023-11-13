let arr1 = new Array();
let arr = [1, 2, 3, 4]; //배열 리터럴

arr = [1, "2", true]; // 자료형에 영향X
console.log(arr);

arr = [1, 2, 3, 4];
console.log(arr[0]); //배열 인덱스 접근

arr.push(5); // 배열 추가 (마지막 인덱스에 추가)
console.log(arr);
