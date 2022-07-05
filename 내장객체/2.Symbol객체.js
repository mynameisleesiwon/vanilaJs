let person = {
  firstName: "jeremy",
  lastName: "Go",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

for (const key in person) {
  console.log(key); // fristName, lastName, getFullName 출력
}

console.log(person.getFullName()); // Jeremy go

// Symbol
// 자바스크립트에서 절대 충돌이 일어나지 않는 유일한 key값을 만들어줌
let person2 = {
  firstName: "Jeremy",
  lastName: "Go",
};

let getFullName2 = Symbol("getFullName2"); // 유일한 Key 생성
person2[getFullName2] = function () {
  return this.firstName + " " + this.lastName;
};
