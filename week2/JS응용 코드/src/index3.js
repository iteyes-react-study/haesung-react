//promise 응용
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}
function taskB(a, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * a;
      resolve(res);
    }, 1000);
  });
}
function taskC(a, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 2000);
  });
}

const aPromis = taskA(5, 1).then((a_res) => {
  console.log("A result : ", a_res);
  return taskB(a_res);
});

console.log("쉼터");

aPromis
  .then((b_res) => {
    console.log("B result : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("B result : ", c_res);
  }); // then chaining
