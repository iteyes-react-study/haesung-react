//반복문
let person = {
  name: "이정환",
  age: 25,
  tall: 175
};

const personKeys = Object.keys(person);
const personValues = Object.values(person);

for (let i = 0; i < personKeys.length; i++) {
  const curKey = personKeys[i];
  const curVal = person[curKey]; // personValues[i]

  console.log(curKey + " : " + curVal);
}
