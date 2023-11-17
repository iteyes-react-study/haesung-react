//async
function hello() {
  return "hello";
}

//async : 자동으로 Promise를 반환하는 비동기 처리
async function helloAsync() {
  //자동으로 Promise를 반환하는 비동기 처리
  return "hello Async";
}

// console.log(hello());
// console.log(helloAsync());
helloAsync().then((res) => {
  console.log("인사 : ", res);
});

//await
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//비동기인 delay함수를 실해시켜 작업이 끝난 후 promise 타입으로 리턴
async function newHelloAsync() {
  await delay(3000);
  return "hello async";
}

// 비동기 합수 newHelloAsync를 실행시켜 작업이 끝날때까지 기다려 리턴값을 출력
async function main() {
  const res = await newHelloAsync();
  console.log(res);
}

newHelloAsync().then((res) => {
  console.log(res);
});

main();
