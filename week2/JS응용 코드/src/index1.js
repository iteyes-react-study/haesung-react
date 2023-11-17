// 동기 & 비동기
function taskA(a, b, cb) {
  // setTimeout 비동기 내장함수 (콜백함수, 딜레이타임)
  // 딜레이타임 이후 콜백함수 실행
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 2000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * a;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 3000);
}

// taskA(3, 4, (res) => {
//   console.log("A Task Result : " + res);
// });
// taskB(5, (res) => {
//   console.log("B Task Result : " + res);
// });
// console.log("코드 끝");

taskA(4, 5, (a_res) => {
  console.log("A result : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B result : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C result : ", c_res);
    });
  });
});
// 비동기 작업의 양이 많아지고 엮을 수록 콜백지옥에 빠진다
