let person = {
  key: "value", //객체 프로퍼티(키:값)
  key1: "value1",
  key2: true,
  key3: [1, 2],
  key4: function () {}
}; //객체 리터럴 방식

console.log(person.key2);
console.log(person["key1"]);

console.log(getPropertyValue("key3"));

function getPropertyValue(key) {
  return person[key];
}
