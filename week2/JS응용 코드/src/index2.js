//Promise
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값은 숫자가 아닙니다.");
    }
  }, 2000);
}

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        console.log(number);
        // 성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값은 숫자가 아닙니다.");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(10);

res
  .then((res) => {
    console.log("작업성공 : ", res);
  })
  .catch((err) => {
    console.log("작업실패 : ", err);
  });
